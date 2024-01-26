import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FcDocument } from "react-icons/fc";
import resume from "../assets/resume/resume.pdf";
import toast from "react-hot-toast";
import social from "./constants";

const Sidebar = () => {
  const resumeLink = resume;

  return (
    <ul>
      <li className="flex justify-between items-between w-40 h-14 ml-[-100px] hover:ml-0 duration-300 bg-[#2867B2]">
        <a
          className="flex justify-around items-center w-full "
          href={social.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <FaLinkedin size={30} />
        </a>
      </li>
      <li className="flex justify-between items-between w-40 h-14 ml-[-100px] hover:ml-0 duration-300 bg-[#1B1F23]">
        <a
          className="flex justify-around items-center w-full"
          href={social.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub <FaGithub size={30} />
        </a>
      </li>
      <li className="flex justify-between items-between w-40 h-14 ml-[-100px] hover:ml-0 duration-300 bg-[#e22211]">
        <a
          className="flex justify-around items-center w-full"
          href={social.email}
        >
          Email <HiOutlineMail className="ml-4" size={30} />
        </a>
      </li>
      <li className="flex justify-between items-between w-40 h-14 ml-[-100px] hover:ml-0 duration-300 bg-[#4E535E]">
        <a
          className="flex justify-around items-center w-full"
          href={social.resume}
        >
          Resume <FaFilePdf className="ml-4" size={30} />
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
