import toast, { Toaster } from "react-hot-toast";
import { AnimationWrapper } from "../components/AnimationWrapper";
import { InputBox } from "../components/Input";
import { Link, Navigate } from "react-router-dom";
import googleIcon from "../assets/images/google.png";
import { useContext, useState } from "react";
import { emailRegex } from "../constants/regex";
import { userAuthThroughServer } from "../services/auth";
import { UserContext } from "../contexts/user.context";

export const SignIn = () => {
  const { userAuth, setUserAuth } = useContext(UserContext);
  const { accessToken } = userAuth;
  const [user, setUser] = useState({
    email: null,
    password: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email } = user;
    if (!email.length) return toast.error("Please enter your email");
    if (!emailRegex.test(email)) return toast.error("Email is invalid");
    // if (!passwordRegex.test(password))
    //   return toast.error(
    //     "Password should be 6 to 20 characters long with a number, 1 lowercase and 1 uppercase letters"
    //   );
    const response = await userAuthThroughServer("signin", user);
    setUserAuth({
      data: response.data,
    });
  };

  return accessToken ? (
    <Navigate to="/" />
  ) : (
    <AnimationWrapper key={"sign-up"}>
      <section className="h-cover flex items-center justify-center">
        <Toaster />
        <form onSubmit={handleSubmit} className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            Welcome back
          </h1>
          <InputBox
            onChange={(e) =>
              setUser((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              })
            }
            value={user.email}
            type="email"
            name="email"
            placeholder="Email"
            icon={<i className="fi fi-rr-envelope input-icon"></i>}
          />
          <InputBox
            onChange={(e) =>
              setUser((prev) => {
                return {
                  ...prev,
                  password: e.target.value,
                };
              })
            }
            value={user.password}
            type="password"
            name="password"
            placeholder="Password"
            icon={<i className="fi fi-rr-key input-icon"></i>}
          />
          <button className="btn-dark center mt-14">sign in</button>
          <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div>

          <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
            <img src={googleIcon} className="w-5" /> continue with google
          </button>
          <p className="mt-6 text-dark-grey text-xl text-center">
            {"Don't have an account"} ?
            <Link to="/signup" className="underline text-black text-xl ml-1">
              Join us today
            </Link>
          </p>
        </form>
      </section>
    </AnimationWrapper>
  );
};
