import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);

  const testIn: any = () => setCollapse(true);
  const testOut: any = () => setCollapse(false);

  return (
    <nav
      className={collapse ? "sidebar--enabled" : "sidebar--disabled"}
      onMouseOver={testIn}
      onMouseOut={testOut}
    >
      <ul>
        <li>D</li>
      </ul>
    </nav>
  );
};

export { Navbar };
