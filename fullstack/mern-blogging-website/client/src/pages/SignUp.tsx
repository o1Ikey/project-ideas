/* eslint-disable @typescript-eslint/no-explicit-any */
import googleIcon from "@/assets/images/google.png";
import { Link } from "react-router-dom";
import { AnimationWrapper } from "@/common/page-animation";
import toast, { Toaster } from "react-hot-toast";
import { InputBox } from "@/components/input";
import { useState } from "react";
import { emailRegex } from "@/constants/regex";
import axios from "axios";

export const SignUp = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, fullname } = data;
    if (fullname && fullname.length < 3)
      return toast.error("Full Name must be at least 3 letters long");

    if (!email.length) return toast.error("Please enter your email");
    if (!emailRegex.test(email)) return toast.error("Email is invalid");
    // if (!passwordRegex.test(password))
    //   return toast.error(
    //     "Password should be 6 to 20 characters long with a number, 1 lowercase and 1 uppercase letters"
    //   );
    const formData = {
      personalInfo: {
        ...data,
      },
    };
    await axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + "signup", formData)
      .then(({ data }) => toast.success(data.message))
      .catch(({ response }) => toast.error(response.data.error));
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
              setData((prev) => {
                return {
                  ...prev,
                  fullname: e.target.value,
                };
              })
            }
            value={data.fullname}
            type="text"
            name="fullname"
            placeholder="Full Name"
            icon={<i className="fi fi-rr-user input-icon"></i>}
          />
          <InputBox
            onChange={(e) =>
              setData((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              })
            }
            value={data.email}
            type="email"
            name="email"
            placeholder="Email"
            icon={<i className="fi fi-rr-envelope input-icon"></i>}
          />
          <InputBox
            onChange={(e) =>
              setData((prev) => {
                return {
                  ...prev,
                  password: e.target.value,
                };
              })
            }
            value={data.password}
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

          <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
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
