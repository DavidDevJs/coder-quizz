import "./header.css";
import logo from "../../assets/image/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="coder quiz" />
    </header>
  );
};

export { Header };
