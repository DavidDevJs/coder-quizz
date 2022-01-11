import { useState } from "react";
import { getLogin } from "./getLogin";
import { HomeProps } from "./Home";

const Login = ({ setToken }: HomeProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    getLogin(email, password).then((token) => setToken(token));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Next</button>
    </form>
  );
};

export { Login };
