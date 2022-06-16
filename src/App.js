import Home from "../src/pages/Home";
import { Login } from "../src/pages/Login";
import Signup from "../src/pages/SignUp";
import ErrorPage from "../src/pages/Error";
import Profile from "../src/pages/Profile";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";

// import HospitalDetails from "../src/pages/HospitalDetails";
const App = () => {
  return (
    <>
      <Navbar />
      {/* <HospitalDetails /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
