import React from "react";
import Data from "../Data.json";
import { ImLocation2 } from "react-icons/im";
import { MdWork, MdSchool } from "react-icons/md";

function Profile() {
  return (
    <div className="profile-wrapper">
      <button className="profile-edit">Edit Info</button>

      <img src={Data[0].img} alt="Profile Picture" />

      <h2>{Data[0].name}, age</h2>

      <h5>
        <ImLocation2 />
        Leipzig
      </h5>

      <h5>
        <MdWork />
        Web-Developer
      </h5>

      <h5>
        <MdSchool />
        lorem
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
          deserunt magnam consequatur officiis eos in harum ipsum dolorum,
          maxime, voluptate quas, modi dolores provident? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Consequuntur eveniet ad dolorem,
          maxime, quas facilis sed est esse officia aliquam ut maiores fugit.
          Nulla, corrupti. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
          natus cupiditate similique, repellendus delectus eum obcaecati
          incidunt maiores error beatae sint esse. Repellat architecto
          distinctio doloremque libero sequi praesentium sed quod nulla
          necessitatibus voluptates, aspernatur harum laborum vero voluptatem
          consectetur earum! Consectetur porro deleniti tempore omnis accusamus,
          ducimus ipsam quo!
        </p>
      </div>
    </div>
  );
}

export default Profile;
