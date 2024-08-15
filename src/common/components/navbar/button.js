import React from "react";
import { Link } from "react-router-dom";
const Button = () => {
  return (
    <Link to="/contact" className="bg-black text-white  px-6 py-2 rounded-full sm:w-7/12">
      Contact Us
    </Link>
  );
};

export default Button;