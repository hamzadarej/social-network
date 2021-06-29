import React from "react";
import Data from "../Data.json";
import { ImLocation2 } from "react-icons/im";
import { MdWork, MdSchool } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "./Slider";

function Profile() {
  return (
    <div className="profile-wrapper">
      <Link to="/hamzadarej">
        <FaChevronLeft className="profile-back" />
      </Link>

      <button className="profile-edit">Edit Info</button>

      {/* <Slider /> */}

      <img className="profile-img" src={Data[0].img} alt="Profile Picture" />

      <h2 className="profile-name">{Data[0].name}, age</h2>

      <h5 className="profile-info">
        <ImLocation2 />
        <p>Leipzig</p>
      </h5>

      <h5 className="profile-info">
        <MdWork />
        <p>Web-Developer</p>
      </h5>

      <h5 className="profile-info">
        <MdSchool />
        <p>Lorem</p>
      </h5>

      <hr />

      <div className="profile-text">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
          rem?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          cupiditate doloribus nobis similique quibusdam perspiciatis dolorem
          ipsam mollitia eius asperiores. Ea facere at aliquid omnis.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio vel
          deserunt magnam consequatur officiis eos.
        </p>
      </div>
    </div>
  );
}

export default Profile;
