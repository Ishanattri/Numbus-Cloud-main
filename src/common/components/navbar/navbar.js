import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

import NavLinks from "./navlink/navlink";
import Button from "./button";

import Close from "../../assets/close-outline.svg"
import Menu from "../../assets/menu-outline.svg"

import "./navbar.css"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white z-20 relative ">
      <div className="flex items-center font-medium justify-around text-black">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9 logo_img" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>

            <img src={`${open ? Close : Menu}`} width={30} />

          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Raleway] navbar_items ">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Insights
            </Link>
          </li>

          <li>
            <Link to="/about" className="py-7 px-3 inline-block">
              About us
            </Link>
          </li>
        </ul>
        <div className="md:block hidden btn">
          <Button />

        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          {/* <div className="py-5">
            <Button />
          </div> */}
            <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Insights
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>

          <div className="sm:pt-3">
          <Button />
          </div>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
