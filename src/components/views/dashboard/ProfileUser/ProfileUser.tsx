import { Avatar } from "./Avatar";
import { Stats } from "./Stats";

import "./infoUser.css";

const ProfileUser = () => {
  return (
    <section className="profile-user">
      <Avatar />
      <Stats />
    </section>
  );
};

export { ProfileUser };
