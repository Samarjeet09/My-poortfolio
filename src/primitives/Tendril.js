class Tendril {
  constructor(options) {
    this.spring = options.spring + Math.random() * 0.1 - 0.05;
    this.friction = options.friction || 0.5;
    this.nodes = [];

    for (let i = 0; i < options.size; i++) {
      const node = { x: 0, y: 0, vy: 0, vx: 0 };
      this.nodes.push(node);
    }
  }

  update(target) {
    const spring = this.spring;
    let node = this.nodes[0];

    node.vx += (target.x - node.x) * spring;
    node.vy += (target.y - node.y) * spring;

    for (let i = 0; i < this.nodes.length; i++) {
      node = this.nodes[i];
      if (i > 0) {
        const prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * this.friction;
        node.vy += prev.vy * this.friction;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= 0.98; // Apply tension
    }
  }

  draw(ctx) {
    ctx.beginPath();
    const x = this.nodes[0].x;
    const y = this.nodes[0].y;

    ctx.moveTo(x, y);

    for (let i = 1; i < this.nodes.length - 2; i++) {
      const a = this.nodes[i];
      const b = this.nodes[i + 1];
      const midX = (a.x + b.x) * 0.5;
      const midY = (a.y + b.y) * 0.5;
      ctx.quadraticCurveTo(a.x, a.y, midX, midY);
    }

    const a = this.nodes[this.nodes.length - 2];
    const b = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);

    ctx.stroke();
    ctx.closePath();
  }

  reset(target) {
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      node.x = target.x;
      node.y = target.y;
      node.vx = 0;
      node.vy = 0;
    }
  }
}

export default Tendril;
