import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchApiLogout } from "../../queries/UserQuery";

import { logout } from "../../features/User/userSlice";
import { clearToken } from "../../features/User/tokenSlice";
import { clearCart } from "../../features/Cart/cartSlice";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((slice) => slice.user);

  const { user, isLogged } = userState;

  const [open, setOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const cart = useSelector((state) => state.cart);

  const handleLogout = async () => {
    try {
      await fetchApiLogout();
      dispatch(logout());
      dispatch(clearToken());
      dispatch(clearCart());
      localStorage.removeItem("firstLogin");
      navigate("/user/login");
    } catch (error) {
      navigate("/");
    }
  };
  const loginTrue = () => {
    return (
      <>
        <li className="custom-menu-item items-center cursor-pointer">
          <div
            className="flex flex-row justify-between items-center"
            onClick={() => {
              console.log(openUser);
              setOpenUser(!openUser);
            }}
          >
            <p>{user && user.name}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <ul
            className={`flex-col items-center ${
              openUser ? "flex" : "hidden"
            } absolute animate-slideDown`}
          >
            <li className="custom-menu-item">
              <NavLink to="/user/profile">Profile</NavLink>
            </li>
            <li className="custom-menu-item">
              <NavLink to="/order">Order</NavLink>
            </li>
            <li className="custom-menu-item">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </li>
      </>
    );
  };
  const loginFalse = () => {
    return (
      <>
        <li className="custom-menu-item">
          <NavLink to="/user/register">Register</NavLink>
        </li>
        <li className="custom-menu-item">
          <NavLink to="/user/login">Login</NavLink>
        </li>
      </>
    );
  };

  return (
    <header className="py-2 px-10 flex flex-col space-y-2 bg-blue-100">
      <nav className="flex flex-row justify-center sm:justify-end items-center">
        <div className="sm:hidden text-center text-xl font-semibold cursor-pointer text-orange-500">
          BookShop.
        </div>
        <ul className="hidden sm:flex sm:flex-row sm:justify-between sm:items-center gap-10 uppercase text-gray-500 font-medium">
          {isLogged == true ? loginTrue() : loginFalse()}
        </ul>
      </nav>
      <nav className="flex flex-row justify-between items-center pb-5">
        <div
          onClick={() => setOpen(!open)}
          className="basis-1/6 sm:hidden flex items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="custom-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
          <ul
            className={`sm:hidden flex flex-col items-center ${
              open ? "flex" : "hidden"
            } absolute top-20 z-50 left-0 right-0  bg-white w-full animate-slideDown`}
          >
            <li className="custom-menu-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="custom-menu-item">
              <NavLink to="/book/selling">Selling</NavLink>
            </li>
            <li className="custom-menu-item">
              <NavLink to="/book">Products</NavLink>
            </li>

            {isLogged ? loginTrue() : loginFalse()}
          </ul>
        </div>
        <div className="logo hidden sm:block sm:basis-2/6 text-center text-xl font-semibold cursor-pointer text-orange-500">
          BookShop.
        </div>
        <ul
          id="item-top-menu"
          className="basis-3/6 hidden sm:flex sm:items-center sm:justify-center sm:gap-10 uppercase text-gray-500 font-medium"
        >
          <li className="custom-menu-item">
            <NavLink className="" to="/">
              Home
            </NavLink>
          </li>
          <li className="custom-menu-item">
            <NavLink className="" to="/book/selling">
              Selling
            </NavLink>
          </li>
          <li className="custom-menu-item">
            <NavLink className="" to="/book">
              Products
            </NavLink>
          </li>
        </ul>
        <div className="basis-5/6 sm:basis-1/6 flex justify-end sm:justify-start items-center uppercase text-sm text-gray-500 font-medium">
          <div className="custom-menu-item">
            <NavLink to="/cart">
              <svg
                id="item-toggle-menu-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="custom-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="mx-2">Cart</span>
              <span className="custom-count-item-cart bg-orange-300 text-white">
                {cart.totalAmount}
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
