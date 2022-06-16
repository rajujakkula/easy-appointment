import React, { useState, useEffect } from "react";
import HospitalsDisplay from "../components/Hospitals/HospitalsDisplay";
import { FiSearch } from "react-icons/fi";
import "../styles/Home.css";
const Home = () => {
  const [location, setLocation] = useState("");
  const [special, setSpecial] = useState(false);

  const locationHandle = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };

  useEffect(() => {
    const closePop = (e) => {
      e.target.name !== "specialization" && setSpecial(false);
    };

    special && document.body.addEventListener("click", closePop);

    return () => {
      document.body.removeEventListener("click", closePop);
    };
  });

  return (
    <>
      <div className="container-home">
        <div className="location-search">
          <div className="search-input">
            <input
              type="search"
              name="location"
              id=""
              placeholder="Search Location . . . "
              onChange={locationHandle}
            />
            <FiSearch />
          </div>
          <p
            className="location-filter"
            name="specialization"
            onClick={(e) => {
              e.stopPropagation();
              setSpecial(!special);
            }}
          ></p>
          {special && (
            <ul>
              <li>rwer</li>
              <li>ybhjr</li>
              <li>jn</li>
              <li>rwer</li>
              <li>rwer</li>
              <li>ybhjr</li>
              <li>jn</li>
              <li>rwer</li>
              <li>rwer</li>
              <li>ybhjr</li>
              <li>jn</li>
              <li>rwer</li>
            </ul>
          )}
        </div>
      </div>
      <h4 className="hos-at-loc">
        Hospitals At Location <span>Name</span>
      </h4>

      <div className="container-Hospitals">
        <HospitalsDisplay />
        <HospitalsDisplay />
        <HospitalsDisplay /> <HospitalsDisplay /> <HospitalsDisplay />
        <HospitalsDisplay />
      </div>
    </>
  );
};

export default Home;
