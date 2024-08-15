import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <li>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-primary font-bold" : "";
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-primary font-bold" : "";
          }}
          to="/products"
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-primary font-bold" : "";
          }}
          to="/about"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-primary font-bold" : "";
          }}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-primary font-bold" : "";
          }}
          to="/cart"
        >
          Cart
        </NavLink>
      </li>
    </>
  );
}

export default Menu;
