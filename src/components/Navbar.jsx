import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import {IoMdClose} from "react-icons/io"
import { FaBarsStaggered } from "react-icons/fa6";




const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const navLinks = [
    { id: 1, link: "/", title: "Home" },
    { id: 2, link: "categories", title: "Categories" },
    { id: 3, link: "contact", title: "Contact" },
  ];


  const handleToggle=()=>{
    setToggle(!toggle)
  }





  return (
    <header className=" shadow-md w-full fixed top-0 left-0">
      <div className="bg-white md:flex justify-between items-center container mx-auto md:px-0 px-7  py-4">

        <div className=" flex items-center gap-x-2 text-2xl cursor-pointer">
          <FaReact className=" w-10 h-10 text-blue-600" />
          <h3 className=" font-semibold">React</h3>
        </div>

        <ul className={`md:flex md:items-center gap-x-8 bg-white absolute md:static md:z-auto z-[-1]
         w-full md:w-auto left-0 transition-all duration-700 ease-in px-8 md:px-0 py-5 md:py-0
         ${toggle ? " top-12":" top-[-490px]"}`}>
          {navLinks.map((props) => {
            const { id, link, title } = props;
            return (
              <li className=" my-6 md:my-0 font-semibold" key={id}>
                <Link className=" text-gray-800 hover:text-blue-400 duration-500" to={link}>{title}</Link>
              </li>
            );
          })}
        </ul>

          <div onClick={handleToggle} className=" md:hidden cursor-pointer text-2xl absolute top-6 right-8">
            {toggle ? <IoMdClose/> : <FaBarsStaggered/>}
          </div>

      </div>
    </header>
  );
};

export default Navbar;

