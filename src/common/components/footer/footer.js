import React from "react";
import { Link } from "react-router-dom";
import Input from "./input/input";
import "./footer.css"

import Wp from "../../assets/icon-whatsapp.svg"
import Insta from "../../assets/logo-instagram.svg"
import Fb from "../../assets/logo-facebook.svg"
import Li from "../../assets/logo-linkedin.svg"
import Github from "../../assets/logo-github.svg"

const footer = () => {
    return (
        <footer className="bg-white">
            <div className="footer_cotainer md:px-20 py-16 sm:px-5 ">
            <div className="mt-10 mb-10 w-full h-[0.0625rem] bg-gray-400" ></div>
                {/* <hr className="mb-10 bg-black" /> */}
                <div className="footer_sub_container md:grid md:grid-cols-3 md:gap-5 sm:linear">
                    <div className="news_links">
                        <div className="news_letter">
                            <span className="text-3xl font-[Inter] text-black font-semibold flex text-left sm:max-sm:text-lg sm:w-11/12">Subscribe to our newsletter to stay in touch with the latest.</span>
                            <div className="mt-5">
                                <Input />
                            </div>
                        </div>

                        <div className="social_links pt-10">
                            <span className="text-[Raleway] text-gray-600 text-lg flex">FOLLOW US HERE:</span>
                            <ul className="flex justify-between w-7/12 pt-6 sm:w-9/12">
                                <li>
                                    <img className="bg-white text-white rounded-xl w-12 hover:bg-pink-700 hover:w-14" src={Insta} />

                                </li>
                                <li>
                                    <img className="bg-white text-white rounded-xl w-12 hover:bg-fb hover:w-14 " src={Fb} />
                                </li>
                                <li>
                                    <img className="bg-white text-white rounded-xl w-12 hover:w-14" src={Github} />
                                </li>
                                <li>
                                    <img className="bg-white text-white rounded-lg w-12 hover:bg-Li hover:w-14" src={Li} />
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="menus_links text-black flex  justify-center sm:justify-start sm:pt-10 sm:pb-10">
                        <ul className="flex flex-col text-left">
                            <li className="text-2xl flex items-center justify-center">
                                <Link>Our Services</Link>
                                <div className="w-5 ml-2 mt-1">
                                    <svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                                        <path fill-rule="evenodd" d="M12 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" clip-rule="evenodd"></path>
                                        <path fill-rule="evenodd" d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                            </li>
                            <li className="text-2xl font-[Inter] pt-2 hover:text-blue1">
                                <Link>Projects</Link>
                            </li>
                            <li className="text-2xl font-[Inter] pt-2 hover:text-blue1">
                                <Link>Our Process</Link>
                            </li>
                            <li className="text-2xl font-[Inter] pt-2 hover:text-blue1">
                                <Link>Contacts</Link>
                            </li>
                            <li className="text-2xl font-[Inter] pt-2 hover:text-blue1">
                                <Link>Blog</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="contact_links">
                        <div className="email_link ">
                            <p className="flex text-gray-600 font-semibold">DROP US A LINE</p>
                            <a href="" className="text-text-black font-semibold font-[Inter] text-xl flex pt-5 pb-5 sm:pt-2">ishanattri5@gmail.com</a>
                        </div>
                        <div className="call_link">
                            <p className="flex text-gray-600 font-semibold">CALL US</p>
                            <div className="flex pt-5 sm:pt-2">
                                <img className=" " src={Wp} />
                                <span className=" pl-5 text-text-black font-[Inter] font-semibold text-xl"> +1 (213) 337-8573</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 w-full h-[0.0625rem] bg-gray-400" ></div>

                <div className="copy_rights flex justify-between pt-5 font-[Inter] text-gray-600">
                    <div className="ele_1">
                        <p className="sm:text-[0.75rem]">© Numbus. All rights reserved</p>
                    </div>

                    <div className="ele_2 flex ">
                        <span className="sm:text-[0.75rem] hover:text-white">
                            Manage cookies
                        </span>
                        <span className="pl-4 sm:text-[0.75rem] hover:text-white">
                            Terms and Conditions
                        </span>
                        <span className="pl-4 sm:text-[0.75rem] hover:text-white">
                            Privacy Policy
                        </span>
                    </div>
                </div>

            </div>
        </footer>
    )
}


export default footer;