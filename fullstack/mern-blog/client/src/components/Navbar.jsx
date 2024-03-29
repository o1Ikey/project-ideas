import { Link, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import logo from "../assets/images/logo.png";
import { UserContext } from "../contexts/user";
import { UserPanel } from "./UserPanel";

export const Navbar = () => {
  const { userAuth } = useContext(UserContext);
  const { accessToken } = userAuth.data;
  const [showUserNavPanel, setShowUserNavPanel] = useState(false);
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  const getImage = (value) => {
    if (value?.user?.personalInfo) {
      return value?.user?.personalInfo?.profileImg;
    }
    return "";
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="flex-none w-10">
          <img src={logo} alt="logo" className="w-full" />
        </Link>

        <div
          className={`${
            searchBoxVisibility ? "show" : "hidden"
          } absolute bg-white w-full left-0 top-full mt-0.5 border-0 border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show`}
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12"
          />
          <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
        </div>

        <div className="flex items-center gap-3 md:gap-6 ml-auto">
          <button
            onClick={() => setSearchBoxVisibility((prev) => !prev)}
            className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center"
          >
            <i className="fi fi-rr-search text-xl"></i>
          </button>
          <Link to={"/editor"} className="hidden md:flex gap-2 link">
            <i className="fi fi-rr-file-edit"></i>
            <p>Write</p>
          </Link>

          {accessToken || userAuth.data?.user?.personalInfo ? (
            <>
              <Link to="/dashboard/notification">
                <button className="w-12 h-12 rounded-full bg-grey relative hover:bg-black/10">
                  <i className="fi fi-rr-bell text-2xl block mt-1"></i>
                </button>
              </Link>
              <div className="relative">
                <button
                  className="w-12 h-12 mt-1"
                  onClick={() => setShowUserNavPanel((prev) => !prev)}
                >
                  <img
                    src={getImage(userAuth.data)}
                    className="w-full h-full object-cover rounded-full"
                  />
                </button>
                {showUserNavPanel && <UserPanel />}
              </div>
            </>
          ) : (
            <>
              <Link to={"/signin"} className="btn-dark py-2">
                Sign In
              </Link>
              <Link to={"/signup"} className="btn-light py-2 hidden md:block">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};
