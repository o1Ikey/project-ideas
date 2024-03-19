import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { useState } from "react";
import { getInSession } from "./utils/session";
import { UserContext } from "./contexts/user";
import { Editor } from "./pages/Editor";
import { Toaster } from "react-hot-toast";

function App() {
  const [userAuth, setUserAuth] = useState(() => {
    const user = getInSession("user");
    return user ? JSON.parse(user) : { data: { user: { accessToken: null } } };
  });
  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
      <Toaster />
    </UserContext.Provider>
  );
}

export default App;
