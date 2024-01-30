import Home from "../primitives/Home";
import About from "../primitives/About";
import Skills from "../primitives/Skills";

const Main = () => {
  return (
    <main className="bg-theme-black text-theme-white">
      <Home />
      <About />
      <Skills />
    </main>
  );
};

export default Main;
