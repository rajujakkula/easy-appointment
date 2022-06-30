import React from "react";
import "../styles/Profile.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
const Profile = () => {
  const navigate = useNavigate();
  const logOut = async () => {
    if (auth.currentUser) {
      console.log(auth.currentUser);
      await signOut(auth).then(() => {
        navigate("/");

        console.log("successful log out");
      });
    } else {
      console.log("You are not logged-In");
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <p className="user-greeting">Hi ,{auth.currentUser?.displayName} 👋</p>
        <hr width="70%" />
        <div className="user-name">
          <span>Name :</span>
          <span>{auth.currentUser?.displayName}</span>
        </div>
        {/* <div className="user-gender">
        <span>Gender :</span>
        <span>Male</span>
      </div> */}
        <div className="user-email">
          <span>Email :</span>
          <span>{auth.currentUser?.email}</span>
        </div>
        <hr width="70%" />
        <div className="user-out">
          <button type="button" onClick={logOut}>
            Log out
          </button>
        </div>
      </main>
    </>
  );
};

export default Profile;
