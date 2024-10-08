import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./links";
import "./navlink.css"

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group links_name"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {/* <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span> */}
            </h1>
            {link.submenu && (
              <div className="">
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block left-5 ">
                  <div className="py-3 ">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-blue1 rotate-45"
                    ></div>
                  </div>
                  <div className={`bg-white p-5 ${link.name == "Expertise" && 'grid grid-cols-4 gap-5'}   rounded-md `}>
                    {link.sublinks.map((mysublinks) => (
                      <div className="">
                        <h1 className="text-lg font-semibold font-[Inter] border-b-2 border-gray-300 pb-1">
                          {mysublinks.Head}
                        </h1>
                        <div className={`${link.name == 'Services' && 'grid grid-cols-2 gap-5'} w-full`}>
                          {mysublinks.sublink.map((slink) => (
                            <li className=" text-sm text-gray-800 my-2.5 " >
                              <Link
                                to={slink.link}
                                className={` ${link.name == 'Services' && 'text-lg '} hover:text-blue-800`}
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                          }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;


// hover:text-blue1 hover:font-bold hover:border-b-2 hover:border-blue-800