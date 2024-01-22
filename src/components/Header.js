import { useState, Fragment } from "react";
import { Link } from "react-scroll";
import { Menu, Transition } from "@headlessui/react";
import Sidebar from "./Sidebar";
import toast from "react-hot-toast";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaExchangeAlt,
  FaFilePdf,
} from "react-icons/fa";
import { BsFillPersonLinesFill, BsChevronDown } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FcDocument } from "react-icons/fc";

import Brackets from "../assets/images/brackets-dark.png";
import social from "./constants";
// import "./flag-icons.min.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <header className="w-full mx-auto h-14 md:h-20 flex justify-between items-center px-5 md:px-10 bg-[rgba(32,32,35,0.4)] text-theme-white fixed backdrop-blur-[10px] z-10 shadow-[0px_3px_15px_0px] shadow-[rgba(0,0,0,0.2)]">
      <Link to="home" smooth={true} duration={600}>
        <div className="group flex justify-center items-center select-none">
          <img
            className="w-8 2xl:w-9 h-auto group-hover:rotate-[25deg] duration-300"
            src={Brackets}
            alt="logo"
          />
          <h1 className="text-xl 2xl:text-2xl ml-4 font-bold">Samarjeet Singh</h1>
        </div>
      </Link>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "w-full h-screen md:hidden flex flex-col justify-between items-center fixed inset-0 bg-theme-black py-28 z-20"
        }
      >
        <FaTimes
          onClick={handleClick}
          size={44}
          className="absolute top-2 right-4"
        />

        <ul className="h-60 flex flex-col justify-between items-center text-3xl">
          <li>
            <Link onClick={handleClick} to="home" smooth={true} duration={600}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="about" smooth={true} duration={600}>
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={600}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="works" smooth={true} duration={600}>
              Works
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={600}
            >
              Contact
            </Link>
          </li>
        </ul>

        <ul className="w-[300px] flex justify-between items-center">
          <li className="p-2.5 bg-[#2867B2] rounded">
            <a href={social.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin size={42} />
            </a>
          </li>
          <li className="p-2.5 bg-[#1B1F23] rounded">
            <a href={social.github} target="_blank" rel="noreferrer">
              <FaGithub size={40} />
            </a>
          </li>
          <li className="p-2.5 bg-[#e22211] rounded">
            <a href={social.email}>
              <HiOutlineMail size={40} />
            </a>
          </li>
          <li className="p-2.5 bg-[#4E535E] rounded">
            <a href={social.resume}>
              <FaFilePdf size={40} />
            </a>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-center">
        <ul className="flex md:text-lg font-medium w-[385px] justify-between items-center ">
          <li className="cursor-pointer hover:text-white duration-200">
            <Link to="home" smooth={true} duration={600}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-white duration-200">
            <Link to="about" smooth={true} duration={600}>
              About
            </Link>
          </li>
          <li className="cursor-pointer hover:text-white duration-200">
            <Link to="skills" smooth={true} duration={600}>
              Skills
            </Link>
          </li>
          <li className="cursor-pointer hover:text-white duration-200">
            <Link to="works" smooth={true} duration={600}>
              Works
            </Link>
          </li>
          <li className="cursor-pointer duration-200 bg-theme-blue-50 hover:bg-theme-blue-100 active:bg-theme-blue-100 hover:text-white active:text-white md:py-[4px] 2xl:py-1.5 px-2.5 rounded">
            <Link to="contact" smooth={true} duration={600}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className="flex md:hidden z-10">
        <FaBars size={35} />
      </div>

      {/* Sidebar */}
      <div className="hidden lg:flex fixed flex-col top-[35vh] left-0">
        <Sidebar />
      </div>
    </header>
  );
};

export default Navbar;
