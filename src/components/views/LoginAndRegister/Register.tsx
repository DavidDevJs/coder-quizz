import { useState } from "react";
import { User } from "../../../interfaces/quizInterfaces";

const Register = () => {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    nickname: "",
    typeDev: "",
    imgProfile: "",
    github: "",
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="register__img-profile">
        <input type="file" name="img-profile" />
      </div>
      <input
        type="text"
        placeholder="Email"
        required
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <input type="password" placeholder="Confirm Password" required />
      <input
        type="text"
        placeholder="UserName"
        required
        onChange={(e) => setUser({ ...user, nickname: e.target.value })}
      />
      <input
        type="text"
        placeholder="Profession"
        onChange={(e) => setUser({ ...user, typeDev: e.target.value })}
      />
      <input
        type="text"
        placeholder="GitHub"
        onChange={(e) => setUser({ ...user, github: e.target.value })}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export { Register };
