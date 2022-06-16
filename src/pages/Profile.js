import React from "react";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <main>
      <p className="user-greeting">Hi , User Name 👋</p>
      <hr width="70%" />
      <div className="user-name">
        <span>Name :</span>
        <span>Your Name</span>
      </div>
      <div className="user-age">
        <span>Age :</span>
        <span>Your Age</span>
      </div>
      <div className="user-gender">
        <span>Gender :</span>
        <span>Male</span>
      </div>
      <div className="user-email">
        <span>Email :</span>
        <span>user123@mail.coms</span>
      </div>
      <hr width="70%" />
      <div className="user-out">
        <button type="button">Log out</button>
      </div>
    </main>
  );
};

export default Profile;
