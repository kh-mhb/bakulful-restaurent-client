import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../Providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="">
      <div className="navbar  text-white bg-slate-900">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost font-serif italic  text-xl">
            BakulFul Restaurant{" "}
          </Link>
        </div>
        <div className="px-5 navlink font-semibold mr-5  text-lg">
          <Link to="/">Home</Link>
          {/* <Link>About</Link> */}
          {/* <Link>Menu</Link> */}
          {user ? (
            <button className="mr-3" onClick={handleLogOut}>
              LogOut <span className="text-xs font-thin">{user.email}</span>{" "}
            </button>
          ) : (
            <Link to="/userLayout/login">Login</Link>
          )}
          <Link to="/userLayout/register">Register</Link>
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
