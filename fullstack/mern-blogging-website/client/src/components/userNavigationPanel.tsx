import { AnimationWrapper } from "@/common/page-animation";
import { removeFormSession } from "@/common/session";
import { useUserContext } from "@/context/user-context";
import { IUser } from "@/types/user.type";
import { Link } from "react-router-dom";

export const UserNavigationPanel = () => {
  const { userAuth, setUserAuth } = useUserContext();
  const { personalInfo } = userAuth.data as IUser;

  const signOutUser = () => {
    removeFormSession("user");
    setUserAuth({ data: { accessToken: null } });
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
