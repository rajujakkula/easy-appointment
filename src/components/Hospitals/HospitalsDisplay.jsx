import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineLocalHospital } from "react-icons/md";
import "../../styles/HospitalsDisplay.css";
import { useNavigate } from "react-router-dom";

const HospitalsDisplay = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Hospital-card" onClick={() => navigate("hos")}>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.YrcACMul16e389YaGH_5OgHaE3&pid=Api&P=0&w=309&h=203"
          alt=""
          loading="lazy"
        />
        <p className="Hospital-name">
          <MdOutlineLocalHospital />
          HospitalName
        </p>
        <div className="card-details">
          <p className="card-loaction">
            <GrLocation />
            Location
          </p>
          <p className="card-Number">
            <BsTelephoneInbound />
            Number
          </p>
        </div>
      </div>
    </>
  );
};

export default HospitalsDisplay;
