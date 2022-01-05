import logo from "../../assets/image/logo.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="coder quiz" />
    </header>
  );
};

export { Header };
