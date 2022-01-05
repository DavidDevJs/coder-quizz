import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { RiDashboardFill, RiLogoutBoxFill } from "react-icons/ri";
import { AiOutlinePartition } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import "./navbar.css";

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);

  const testIn: () => void = () => setCollapse(true);
  const testOut: () => void = () => setCollapse(false);

  const titleShow: { display: string } = !collapse
    ? { display: "none" }
    : { display: "block" };

  return (
    <nav
      className={
        collapse ? "sidebar sidebar--enabled" : "sidebar sidebar--disabled"
      }
      onMouseOver={testIn}
      onMouseOut={testOut}
    >
      <BiMenuAltLeft className="nav__icon--menu" />
      <ul className="nav__list">
        <li className="nav__icon--container">
          <RiDashboardFill className="nav__icon" />
          <span style={titleShow}>Dashboard</span>
        </li>
        <li className="nav__icon--container">
          <AiOutlinePartition className="nav__icon" />
          <span style={titleShow}>Categories</span>
        </li>
        <li className="nav__icon--container">
          <IoIosCreate className="nav__icon" />
          <span style={titleShow}>Create Quiz</span>
        </li>
      </ul>
      <div className="nav__icon--logout">
        <RiLogoutBoxFill className="nav__icon" />
        <span>Logout</span>
      </div>
    </nav>
  );
};

export { Navbar };
