import React, { useState, useEffect, memo } from "react";
import HospitalsDisplay from "../components/Hospitals/HospitalsDisplay";
import { FiSearch } from "react-icons/fi";
import Navbar from "../components/Navbar/Navbar";
import BackNavigation from "../components/BackNavigation";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import "../styles/Home.css";
//
const locations = collection(db, "locations");
var uniquehos = [];
const Home = () => {
  const [loc, setLoc] = useState("hyderabad");
  const [special, setSpecial] = useState(false);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const snapshot = await getDocs(locations);
      const docs = snapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setSearch(docs);
      uniquehos = docs;
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
      <Navbar />
      <div className="container-home">
        <div className="location-search">
          <div className="search-input">
            <input
              type="text"
              name="location"
              placeholder="Search Location or Hospital ... "
              onChange={(e) => {
                setLoc(e.target.value);
              }}
            />
            <FiSearch />
          </div>
          {/* <p
            className="location-filter"
            name="specialization"
            onClick={(e) => {
              e.stopPropagation();
              setSpecial(!special);
            }}
          ></p>
          {special && (
            <ul>
              {search?.specialize.map((specialize) => (
                <li key={Math.random() * 100}>{specialize}</li>
              ))}
            </ul>
          )} */}
        </div>
      </div>

      {/* {loc && (
        <h4 className="hos-at-loc">
          Hospitals At Location
          <p className="ms-2 text-capitalize">{loc}</p>
        </h4>
      )} */}
      <div className="container-Hospitals">
        {search
          .filter((doc) => {
            if (doc.location.toLowerCase() === loc.toLowerCase()) {
              return doc;
            } else if (doc.hosname.toLowerCase() === loc.toLowerCase()) {
              return doc;
            }
            return null;
          })
          .map((res) => (
            <HospitalsDisplay
              details={res}
              key={search.id ? search.id : Math.random() * 100}
            />
          ))}
      </div>
      <BackNavigation />
    </>
  );
};

export default memo(Home);
export { uniquehos };
