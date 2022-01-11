import { useState } from "react";

import { Login } from "./Login";
import { Register } from "./Register";

import logo from "../../../assets/image/logo.svg";
import "./home.css";

export interface HomeProps {
  setToken: React.Dispatch<React.SetStateAction<undefined>>;
}

const Home = ({ setToken }: HomeProps) => {
  const [isLoged, setIsLoged] = useState(true);

  return (
    <section className="home">
      {" "}
      <div className="home__hero">
        <img src={logo} alt="Coder Quiz" />
      </div>
      <div className="home__income">
        {isLoged ? <Login setToken={setToken} /> : <Register />}
      </div>
      <button onClick={() => setIsLoged(true)}>Login</button>
      <button onClick={() => setIsLoged(false)}>Register</button>
    </section>
  );
};

export { Home };
