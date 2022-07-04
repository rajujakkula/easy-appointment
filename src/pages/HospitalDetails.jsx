import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineLocalHospital } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Navbar from "../components/Navbar/Navbar";
import BackNavigation from "../components/BackNavigation";
import { useParams } from "react-router-dom";
import { uniquehos } from "./Home";
import { storage } from "../firebase/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import "../styles/HospitalDetails.css";
import "../styles/HospitalsDisplay.css";

const HospitalDetails = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const hosId = useParams();
  const [url, setUrl] = useState();
  let count = 0;
  const hosdetails = uniquehos.filter(
    (doc) => doc.id === Object.values(hosId)[0]
  );
  const { hosname, hosimage, hosnum, location } = hosdetails[0];

  useEffect(() => {
    const func = async () => {
      if (hosimage !== undefined) {
        const reference = ref(storage, `hospitals/${hosimage}`);
        await getDownloadURL(reference)
          .then((urlImg) => {
            setUrl(urlImg);
          })
          .catch((error) => console.log(error.message));
      }
    };
    if (url === undefined) {
      func();
    }
    return () => {
      func();
    };
  }, [hosimage, url]);
  console.log(hosimage);
  return (
    <>
      <Navbar />
      <div className="HospitalDetails-container">
        <div className="hospi-image-name">
          <div className="hospi-image">
            <img
              src={url}
              style={{ height: "250px" }}
              alt={url}
              loading="lazy"
            />
          </div>
          <div className="hospi-name">
            <p className="Hospital-name">
              <MdOutlineLocalHospital />
              {hosname}
            </p>

            <p className="card-loaction">
              <GrLocation />
              {location}
            </p>
            <p className="card-Number">
              <BsTelephoneInbound />
              {hosnum}
            </p>
          </div>
        </div>
        <div
          className="hospi-specialization"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <p>Specializations Are Here</p>
          <MdOutlineArrowForwardIos className={isOpen ? "active" : ""} />
        </div>
        {isOpen && (
          <ul className="specialization-list">
            {hosdetails[0].specialize.map((spec) => {
              return (
                <li key={Math.random() * 20} className="text-capitalize">
                  {spec}
                </li>
              );
            })}
          </ul>
        )}

        {hosdetails[0].hosdoc.map((doc) => (
          <div className="doctor-profile">
            <div className="doctor-pic">
              <div className="pic">
                <img
                  src="http://shreejiskincare.com/page/doctor-profile-image.jpg"
                  alt=""
                />
              </div>
              <span>{doc}</span>
              <span>{hosdetails[0].specialize[count++]}</span>
            </div>
            <div className="doctor-timings">
              <div className="timings">
                <button type="button" className="time-button">
                  10:15AM
                </button>
                <button type="button" className="time-button" value="11:15AM">
                  11:15AM
                </button>
                <button type="button" className="time-button">
                  12:15PM
                </button>
                <button type="button" className="time-button">
                  01:15PM
                </button>
                <button type="button" className="time-button">
                  03:15PM
                </button>
              </div>
              <div className="booking-appoint">
                <button
                  type="button"
                  onClick={() => {
                    alert("Your  Appointment Has Successfully Booked");
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BackNavigation />
    </>
  );
};

export default HospitalDetails;
