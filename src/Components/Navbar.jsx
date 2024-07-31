import { CircleUserRound, ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="fixed max-w-screen-2xl mx-auto z-[100] h-14 px- inset-x-0 top-0 w-full select-none border-b border-gray-200 bg-black bg-opacity-75 backdrop-blur-2xl transition-all">
      <div className="flex  py-2 xl:p-0 text-white justify-between   ">
        <div className="flex items-center justify-center xl:h-14 px-4">
          <Link to={"/"} className="cursor-pointer ">
            <img className="w-10 inline-block" src="logo.png" alt="Logo" />
            <h2 className="inline-block px-3 font-semibold">GREEN CONNECT</h2>
          </Link>
        </div>
        <div className="flex justify-between">
          <div
            id="sideMenu"
            className={` bg-gray-900 border-l-2 border-gray-200 md:border-none flex flex-col xl:flex-row xl:gap-x-3 xl:h-14 xl:p-0 gap-x-20 xl:m-0 justify-between fixed top-0 h-screen z-10 p-6 text-xl ease-in-out duration-500 ${
              isMenuVisible ? "right-0" : "-right-[500px] xl:text-sm"
            } xl:right-0 xl:flex xl:flex-row xl:bg-transparent`}
          >
            <ul className="flex flex-col drop-shadow-[0_2px_2px_rgba(0,0,0,1)] xl:items-center ml-auto xl:gap-x-5 gap-y-2 xl:flex-row text-balance w-fit text-[16px] text-right ">
              <li className="py-2">
                <X
                  size={32}
                  onClick={() => setMenuVisible((e) => !e)}
                  className="text-red-800 hover:scale-125 cursor-pointer drop-shadow-[0_2px_2px_rgba(0,0,0,1)] xl:hidden xl:h-14 ml-auto "
                />
              </li>
              <li className="py-2 xl:p-0 cursor-pointer hover:text-green-300 ">
                <a href="/">Home</a>
              </li>
              <li className="py-2 xl:p-0 cursor-pointer hover:text-green-300">
                <a href="#">Projects</a>
              </li>
              <li className="py-2 xl:p-0 cursor-pointer hover:text-green-300">
                <a href="#">Stakeholders</a>
              </li>
              <li className="py-2 xl:p-0 cursor-pointer hover:text-green-300">
                <a href="/about">About Us</a>
              </li>
              <li className="py-2 xl:p-0 cursor-pointer hover:text-green-300">
                <a href="/resources">Resources</a>
              </li>
              <li className="py-2 xl:p-0 cursor-pointer hover:text-green-300">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
            <div className="flex xl:items-center drop-shadow-[0_2px_2px_rgba(0,0,0,1)] ">
              <ul className="flex flex-col xl:flex-row text-right xl:items-center xl:gap-x-5 text-[16px] gap-y-5 xl:mb-0 mb-10 ">
                <li className="py-2 relative">
                  <Search className="absolute right-2 top-3 cursor-pointer text-green-700" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-white text-black leading-3 h-8"
                  />
                </li>
                <li className="border-2 hover:bg-white hover:text-gray-800  border-white cursor-pointer p-1 rounded-md w-fit ml-auto">
                  <a href="/login">Login </a>
                  <CircleUserRound className="inline-block" />
                </li>
                <li className="relative p-2 pt-2.5 bg-white  w-fit ml-auto cursor-pointer  ">
                  <sup className="absolute right-1 top-2 text-green-800">0</sup>
                  <ShoppingCart
                    size={20}
                    className="text-[16px] text-green-600 "
                  />
                </li>

                <div className="xl:text-xl lg:mr-2 w-fit hover:text-red-700 hover:bg-white  ml-auto  text-right px-3 py-1 bg-red-600 text-white rounded-xl cursor-pointer">
                  Donate
                </div>
              </ul>
            </div>
          </div>
          <button
            onClick={() => setMenuVisible((e) => !e)}
            className={`xl:hidden mr-3`}
          >
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
