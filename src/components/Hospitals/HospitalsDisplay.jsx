import React, { useState, memo } from "react";
import { GrLocation } from "react-icons/gr";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineLocalHospital } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../styles/HospitalsDisplay.css";
import { storage } from "../../firebase/firebase";
import { getDownloadURL, ref } from "firebase/storage";

const HospitalsDisplay = ({ details }) => {
  const { hosimage, hosname, location, hosnum } = details;
  const [url, setUrl] = useState();
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

  return (
    <>
      {url !== undefined && (
        <Link to={`/${details.id}`} className="text-decoration-none text-muted">
          <div className="Hospital-card">
            <img src={url} alt={hosname} loading="lazy" />
            <p className="Hospital-name">
              <MdOutlineLocalHospital />
              {hosname}
            </p>
            <div className="card-details">
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
        </Link>
      )}
    </>
  );
};

export default memo(HospitalsDisplay);
