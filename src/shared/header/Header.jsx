import { useState } from "react";
import { MdClose } from "react-icons/md";
import { RiMenuFoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu";
function Header() {
  // active menu
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <>
      {/* header */}
      <header className="bg-[#F7FAFC] shadow-lg shadow-white py-4">
        {/* navbar */}
        <nav className="container flex justify-between items-center relative">
          {/* logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl text-primary font-semibold"
          >
            ShopEase
          </Link>

          {/* mobile, tablet menu */}
          <ul
            className={`${
              activeMenu ? "flex z-[9999]" : "hidden"
            } lg:hidden bg-gray w-[200px] h-fit p-8 rounded-md absolute top-[56px] right-[1.5rem] my-transition flex flex-col gap-4 md:gap-6 *:font-semibold *:capitalize *:font-lato`}
          >
            <Menu></Menu>
          </ul>

          {/* desktop menu */}
          <ul className="hidden lg:flex justify-center items-center gap-4 md:gap-6 *:font-semibold *:capitalize *:font-lato">
            <Menu></Menu>
          </ul>

          {/* register & login */}
          <ul className="flex justify-center items-center gap-4 md:gap-6 *:font-semibold *:capitalize *:font-lato">
            <li>
              <Link to="/signin">
                <button className="bg-primary font-medium px-6 py-2 rounded-md text-white font-lato capitalize cursor-pointer hover:bg-secondary my-transition">
                  Sign In
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="bg-primary font-medium px-6 py-2 rounded-md text-white font-lato capitalize cursor-pointer hover:bg-secondary my-transition">
                  Sign Up
                </button>
              </Link>
            </li>

            {/* humberger menu */}
            <button
              onClick={() => {
                setActiveMenu(!activeMenu);
              }}
              className={`${
                activeMenu && "bg-secondary"
              } lg:hidden bg-primary font-medium px-3 py-2 rounded-md text-white text-xl font-lato capitalize cursor-pointer hover:bg-secondary my-transition`}
            >
              {activeMenu ? <MdClose /> : <RiMenuFoldFill />}
            </button>
          </ul>

          {/* user info */}
          {/* <div className="relative"> */}
          {/* image */}
          {/* <img
              src="https://example.com/user-image.jpg"
              alt="User Avatar"
              className="rounded-full h-12 w-12 border border-secondary p-1 cursor-pointer"
            /> */}

          {/* name, email & logout */}
          {/* <div className="absolute top-[50px] right-0 flex flex-col space-y-2 bg-gray rounded-md p-4">
              <span className="ml-2 text-sm font-medium text-gray-700">
                Md. Mehedi Hassan
              </span>
              <span className="ml-2 text-sm font-medium text-gray-700">
                dreammehedihassan@gmail.com
              </span>
              <button className="bg-primary font-medium px-6 py-2 rounded-md text-white font-lato capitalize cursor-pointer hover:bg-secondary my-transition mr-auto">
                Logout
              </button>
            </div> */}
          {/* </div> */}
        </nav>
      </header>
    </>
  );
}

export default Header;
