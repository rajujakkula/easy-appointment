import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineLocalHospital } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "../styles/HospitalDetails.css";
import "../styles/HospitalsDisplay.css";

const HospitalDetails = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="HospitalDetails-container">
      <div className="hospi-image-name">
        <div className="hospi-image">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.YrcACMul16e389YaGH_5OgHaE3&pid=Api&P=0&w=309&h=203"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="hospi-name">
          <p className="Hospital-name">
            <MdOutlineLocalHospital />
            HospitalName
          </p>

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
      <div
        className="hospi-specialization"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>Specializations Are Here</p>
        <MdOutlineArrowForwardIos className={isOpen ? "active" : ""} />
      </div>
      {isOpen && (
        <ul className="specialization-list">
          <li>👉🏻 kujgjhg</li>
          <li>👉🏻 kujgjhg</li>
          <li>👉🏻 kujgjhg</li>
          <li>👉🏻 kujgjhg</li>
        </ul>
      )}
      <div className="doctor-profile">
        <div className="doctor-pic">
          <div className="pic">
            <img
              src="http://shreejiskincare.com/page/doctor-profile-image.jpg"
              alt=""
            />
          </div>
          <span>Name</span>
          <span>Specailist</span>
        </div>
        <div className="doctor-timings">
          <div className="timings">
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
          </div>
          <div className="booking-appoint">
            <button type="button">Book Now </button>
          </div>
        </div>
      </div>
      <div className="doctor-profile">
        <div className="doctor-pic">
          <div className="pic">
            <img
              src="http://shreejiskincare.com/page/doctor-profile-image.jpg"
              alt=""
            />
          </div>
          <span>Name</span>
          <span>Specialist</span>
        </div>
        <div className="doctor-timings">
          <div className="timings">
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
          </div>
          <div className="booking-appoint">
            <button type="button">Book Now </button>
          </div>
        </div>
      </div>
      <div className="doctor-profile">
        <div className="doctor-pic">
          <div className="pic">
            <img
              src="http://shreejiskincare.com/page/doctor-profile-image.jpg"
              alt=""
            />
          </div>
          <span>Name</span>
          <span>Specailist</span>
        </div>
        <div className="doctor-timings">
          <div className="timings">
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
          </div>
          <div className="booking-appoint">
            <button type="button">Book Now </button>
          </div>
        </div>
      </div>
      <div className="doctor-profile">
        <div className="doctor-pic">
          <div className="pic">
            <img
              src="http://shreejiskincare.com/page/doctor-profile-image.jpg"
              alt=""
            />
          </div>
          <span>Name</span>
          <span>Specailist</span>
        </div>
        <div className="doctor-timings">
          <div className="timings">
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
            <button type="button" className="time-button">
              10:15AM
            </button>
          </div>
          <div className="booking-appoint">
            <button type="button">Book Now </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
