import React from "react";
import { MdOutlineSmartToy } from "react-icons/md";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center gap-3 py-2  bg-orange-600">
      <div className="flex flex-row gap-2 items-center mx-3">
        <MdOutlineSmartToy size={30} />
        <span>House's of M</span>
      </div>
      <ul className="flex justify-between items-center gap-6 mx-3">
        <li>Home</li>
        <li>Gallery</li>
        <li>xxxx</li>
      </ul>
      <div className="flex gap-6 mx-3">
        <button>Sign up</button>
        <button className="text-black bg-white py-1 px-3 rounded-lg cursor-pointer hover:border  hover:bg-orange-600 hover:text-white hover:outline-white hover:border-outline">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
