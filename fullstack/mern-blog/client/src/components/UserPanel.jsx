import { Link } from "react-router-dom";
import { AnimationWrapper } from "./AnimationWrapper";
import { useContext } from "react";
import { UserContext } from "../contexts/user";
import { removeFormSession } from "../utils/session";

export const UserPanel = () => {
  const { userAuth, setUserAuth } = useContext(UserContext);
  const {
    user: { personalInfo },
  } = userAuth.data;
  const signOutUser = () => {
    removeFormSession("user");
    setUserAuth({ data: { user: { accessToken: null } } });
  };

  return (
    <AnimationWrapper
      keyValue="menu-option"
      className="absolute right-0 z-50"
      transition={{ duration: 0.2 }}
    >
      <div className="bg-white absolute right-0 border border-grey w-60 overflow-hidden duration-2000">
        <Link to="/editor" className="flex gap-2 link md:hidden pl-8 py-4">
          <i className="fi fi-rr-file-edit"></i>
          <p>Write</p>
        </Link>
        <Link to={`/user/${personalInfo.username}`} className="link pl-8 py-4">
          Profile
        </Link>
        <Link to={"/dashboard/blogs"} className="link pl-8 py-4">
          Dashboard
        </Link>
        <Link to={"/settings/edit-profile"} className="link pl-8 py-4">
          Settings
        </Link>
        <span className="absolute border-t border-grey w-full"></span>
        <button
          onClick={signOutUser}
          className="text-left p-4 hover:bg-grey w-full pl-8 py-4"
        >
          <h1 className="font-bold text-xl mg-1">Sign Out</h1>
          <p className="text-dark-grey">@{personalInfo.username}</p>
        </button>
      </div>
    </AnimationWrapper>
  );
};
