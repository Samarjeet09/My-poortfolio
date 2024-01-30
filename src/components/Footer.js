import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-8 2xl:h-9 bg-[#262629] text-theme-white flex justify-center items-center shadow-[0px_-1px_10px_0px] shadow-[rgba(0,0,0,0.2)]">
      <span className="text-sm font-medium">Samarjeet Singh 2023</span>{" "}
      <a
        className="text-sm absolute right-2.5"
        href="https://github.com/Samarjeet09/Samarjeet09-portfolio"
        target="_blank"
        rel="noreferrer"
      >
        source code
      </a>
    </footer>
  );
}
