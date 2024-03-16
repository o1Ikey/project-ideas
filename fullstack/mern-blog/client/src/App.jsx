import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/signin" element={<h1>h2</h1>} />
        <Route path="/signup" element={<h1>h2</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
