import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/Signup";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LogIn />} />
          <Route path="/Login" index element={<LogIn />} />
          <Route path="/Dashboard" index element={<Dashboard />} />
          <Route path="/Signup" index element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
