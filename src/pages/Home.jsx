import React, { useState, useEffect, memo } from "react";
import HospitalsDisplay from "../components/Hospitals/HospitalsDisplay";
import { FiSearch } from "react-icons/fi";
import "../styles/Home.css";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../components/Navbar/Navbar";
const Home = ({ user }) => {
  const [loc, setLoc] = useState("");
  const [special, setSpecial] = useState(false);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const locations = collection(db, "hyderabad");
    const fetch = async () => {
      const snapshot = await getDocs(locations);
      snapshot.forEach((doc) => {
        setDetails(doc.data());
        // console.log(doc.data());
      });
    };

    fetch();

    return () => {
      fetch();
    };
  }, []);

  useEffect(() => {
    const closePop = (e) => {
      e.target.name !== "specialization" && setSpecial(false);
    };

    special && document.body.addEventListener("click", closePop);

    return () => {
      document.body.removeEventListener("click", closePop);
    };
  }, [special]);

  return (
    <>
      <Navbar user={user} />
      <div className="container-home">
        <div className="location-search">
          <div className="search-input">
            <input
              type="search"
              name="location"
              id=""
              value={loc}
              placeholder="Search Location . . . "
              onChange={(e) => {
                setLoc(e.target.value);
              }}
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
        Hospitals At Location <span>{details?.location}</span>
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

export default memo(Home);
