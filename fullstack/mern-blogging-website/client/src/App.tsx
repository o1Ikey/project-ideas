/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navbar } from "@/components/navbar";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { getInSession } from "./common/session";
import { useState } from "react";
import { UserContext } from "./context/user-context";

const App = () => {
  const [userAuth, setUserAuth] = useState(() => {
    const userInSession = getInSession("user");
    return userInSession
      ? JSON.parse(userInSession)
      : { data: { accessToken: null } };
  });

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
