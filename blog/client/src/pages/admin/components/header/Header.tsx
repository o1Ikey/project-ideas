import { Link } from "react-router-dom";
import images from "../../../../constants/images";
import { useState } from "react";
import { AiFillDashboard, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaComments, FaUser } from "react-icons/fa";
import NavItem from "./NavItem";
import NavItemCollapse from "./NavItemCollapse";
import { MdDashboard } from "react-icons/md";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeNavName, setActiveNavName] = useState("dashboard");

  const toggleMenuHandler = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <header className="flex h-fit w-full items-center justify-between p-4 lg:h-full lg:max-w-[300px] lg:flex-col lg:items-start lg:justify-start lg:p-0 ">
      <Link to="/">
        <img src={images.Logo} alt="logo" className="w-16 lg:hidden" />
      </Link>

      {/* menu burger icon */}
      <div className="cursor-pointer">
        {isMenuActive ? (
          <AiOutlineClose
            className="w-6 h-6 lg:hidden"
            onClick={toggleMenuHandler}
          />
        ) : (
          <AiOutlineMenu
            className="w-6 h-6 lg:hidden"
            onClick={toggleMenuHandler}
          />
        )}
      </div>

      <div className="fixed top-0 bottom-0 left-0 z-50 w-3/4 overflow-y-auto bg-white p-4 lg:static lg:h-full lg:w-full lg:p-6">
        <Link to="/">
          <img src={images.Logo} alt="logo" className="w-16" />
        </Link>
        <h4 className="mt-10 font-bold text-[#C7C7C7]">MAIN MENU</h4>
        {/* menu items */}
        <div className="mt-6 flex flex-col gap-y-[0.563rem]">
          <NavItem
            title="Dashboard"
            link="/admin"
            icon={<AiFillDashboard className="text-xl" />}
            name="dashboard"
            activeNavName={activeNavName}
            setActiveNavName={setActiveNavName}
          />
          <NavItem
            title="Comments"
            link="/admin/comments"
            icon={<FaComments className="text-xl" />}
            name="comments"
            activeNavName={activeNavName}
            setActiveNavName={setActiveNavName}
          />
          <NavItem
            title="Users"
            link="/admin/users/manage"
            icon={<FaUser className="text-xl" />}
            name="users"
            activeNavName={activeNavName}
            setActiveNavName={setActiveNavName}
          />
          <NavItemCollapse
            title="Posts"
            icon={<MdDashboard className="text-xl" />}
            name="posts"
            activeNavName={activeNavName}
            setActiveNavName={setActiveNavName}
          >
            <Link
              className="font-semibold text-[#A5A5A5] flex items-center gap-x-2 py-2 text-lg"
              to="/admin/posts/manage"
            >
              Manage all posts
            </Link>
            <Link
              className="font-semibold text-[#A5A5A5] flex items-center gap-x-2 py-2 text-lg"
              to="/admin/categories/manage"
            >
              Categories
            </Link>
          </NavItemCollapse>
        </div>
      </div>
    </header>
  );
};

export default Header;
