import { MdNotStarted } from "react-icons/md";
import logo from "../../assets/image/logo.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="coder quiz" />
      <div className="addButton">
        <MdNotStarted />
        <span>Start</span>
      </div>
    </header>
  );
};

export { Header };
