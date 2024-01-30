import React from "react";
import SkillsTab from "./SkillsTab";
import { useState } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiDjango,
  SiMongodb,
  SiTensorflow,
  SiTableau,
  SiNodedotjs,
} from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { BsPlusLg, BsServer } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";

export default function Skills() {
  const [active, setActive] = useState(false);
  const showMore = () => {
    setActive(!active);
  };

  return (
    <section name="skills" className="w-full pt-12 md:pt-20">
      <div className="max-w-[900px] mx-auto p-4 md:p-8">
        <div>
          <h1 className="font-medium text-xl 2xl:text-2xl border-b-4 inline-block border-theme-white mb-4 pb-1">
            Techstack
          </h1>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 text-center gap-5 pb-6 md:pb-0 md:pt-6">
          <SkillsTab color="#61DAFB" icon={SiReact} name="React" />
          <SkillsTab color="#36B7F0" icon={SiTailwindcss} name="Tailwind" active={active} />
          <SkillsTab color="#44883e" icon={FaNode} name="Nodejs" />
          <SkillsTab color="#62CA80" icon={SiMongodb} name="MongoDb" />
          <SkillsTab color="#4584b6" icon={SiPython} name="Python" active={active} />
          <SkillsTab color="#FF6F00" icon={SiTensorflow} name="Tensorflow" active={active} />
          <SkillsTab color="#DC4A29" icon={SiHtml5} name="HTML5" />
          <SkillsTab color="#376FB4" icon={SiCss3} name="CSS3" />
          <SkillsTab color="#EFD81E" icon={SiJavascript} name="JavaScript" />
          <SkillsTab color="#a4c639" icon={DiDjango} name="Django" />

          <SkillsTab color="#69DDB3" icon={BsServer} name="Restful API" active={active}/>
          <SkillsTab color="#954058" icon={SiTableau} name="Tableau" active={active} />
        </div>
        <button
          className="sm:hidden w-36 h-11 flex justify-center items-center mx-auto rounded bg-transparent border-2 hover:text-white active:text-white hover:bg-theme-blue-50 active:bg-theme-blue-50 hover:border-theme-blue-50 active:border-theme-blue-50 duration-200 group font-medium"
          onClick={showMore}
        >
          {active ? "showLess" : "showMore"}
          {active ? (
            <HiMinus className="ml-1" />
          ) : (
            <BsPlusLg className="ml-1" />
          )}
        </button>
      </div>
    </section>
  );
}
