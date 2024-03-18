import toast, { Toaster } from "react-hot-toast";
import { AnimationWrapper } from "../components/AnimationWrapper";
import { InputBox } from "../components/Input";
import { Link } from "react-router-dom";
import googleIcon from "../assets/images/google.png";
import { useState } from "react";
import { emailRegex } from "../constants/regex";
import { userAuthThroughServer } from "../services/auth";
import { authWithGoogle } from "../config/firebse";

export const SignUp = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, fullName } = user;
    if (fullName && fullName.length < 3)
      return toast.error("Full Name must be at least 3 letters long");

    if (!email.length) return toast.error("Please enter your email");
    if (!emailRegex.test(email)) return toast.error("Email is invalid");
    // if (!passwordRegex.test(password))
    //   return toast.error(
    //     "Password should be 6 to 20 characters long with a number, 1 lowercase and 1 uppercase letters"
    //   );

    await userAuthThroughServer("signup", user);
  };

  const handleGoogleAuth = (e) => {
    e.preventDefault();

    authWithGoogle()
      .then((user) => {
        console.log(user, "user");
      })
      .catch((err) => {
        toast.error("trouble login through google");
        console.log(err, "error");
      });
  };

  return (
    <AnimationWrapper keyValue={"sign-up"}>
      <section className="h-cover flex items-center justify-center">
        <Toaster />
        <form onSubmit={handleSubmit} className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            Join us today
          </h1>
          <InputBox
            onChange={(e) =>
              setUser((prev) => {
                return {
                  ...prev,
                  fullName: e.target.value,
                };
              })
            }
            value={user.fullName}
            type="text"
            name="fullName"
            placeholder="Full Name"
            icon={<i className="fi fi-rr-user input-icon"></i>}
          />
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
          <button className="btn-dark center mt-14">sign up</button>
          <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div>

          <button
            onClick={(e) => handleGoogleAuth(e)}
            className="btn-dark flex items-center justify-center gap-4 w-[90%] center"
          >
            <img src={googleIcon} className="w-5" /> continue with google
          </button>
          <p className="mt-6 text-dark-grey text-xl text-center">
            Already a member ?
            <Link to="/signin" className="underline text-black text-xl ml-1">
              Sign in here
            </Link>
          </p>
        </form>
      </section>
    </AnimationWrapper>
  );
};
