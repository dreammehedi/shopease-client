import { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { RiMenuFoldFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import userAvatarImg from "../../assets/user-avatar.png";
import { AuthContext } from "../../auth/AuthProvider";
import Menu from "../../components/Menu";
function Header() {
  // user
  const { user, userSignOut } = useContext(AuthContext);

  // active menu
  const [activeMenu, setActiveMenu] = useState(false);

  // user info show
  const [showUserInfo, setShowUserInfo] = useState(false);

  // handle logout
  const handleLogout = async () => {
    try {
      await userSignOut().then(() => {
        Swal.fire({
          title: "Logged Out",
          text: "You have successfully logged out!",
          icon: "success",
          timer: 1000,
        });
      });
    } catch {
      Swal.fire({
        title: "Error",
        text: "An error occurred while logging out!",
        icon: "error",
        timer: 1000,
      });
    }
  };
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
            } lg:hidden bg-gray-100 w-[200px] h-fit p-8 rounded-md absolute top-[56px] right-[1.5rem] my-transition flex flex-col gap-4 md:gap-6 *:font-semibold *:capitalize *:font-lato`}
          >
            <Menu></Menu>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "text-primary font-bold" : "";
                }}
                to="/signin"
              >
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "text-primary font-bold" : "";
                }}
                to="/signup"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>

          {/* desktop menu */}
          <ul className="hidden lg:flex justify-center items-center gap-4 md:gap-6 *:font-semibold *:capitalize *:font-lato">
            <Menu></Menu>
          </ul>
          <div className="flex justify-between items-center gap-4 md:gap-6">
            {/* register & login */}
            {user ? (
              // user info
              <div
                className="relative"
                onMouseLeave={() => {
                  setShowUserInfo(false);
                }}
              >
                {/* image */}
                <img
                  onMouseEnter={() => {
                    setShowUserInfo(true);
                  }}
                  src={userAvatarImg || user.photoURL}
                  alt="User Avatar"
                  className="rounded-full h-12 w-12 border border-secondary p-1 cursor-pointer"
                />

                {/* name, email & logout */}
                <div
                  className={`${
                    showUserInfo ? "inline-block" : "hidden"
                  } absolute top-[50px] right-0 flex flex-col space-y-2 bg-gray rounded-md p-4 bg-gray-100`}
                >
                  <span className="ml-2 text-sm font-medium text-dark">
                    {user.displayName}
                  </span>
                  <span className="ml-2 text-sm font-medium text-dark">
                    {user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-primary font-medium px-6 py-2 rounded-md text-white font-lato capitalize cursor-pointer hover:bg-secondary my-transition mr-auto"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <ul className="hidden md:flex justify-center items-center gap-4 md:gap-6 *:font-semibold *:capitalize *:font-lato">
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
              </ul>
            )}
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
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
