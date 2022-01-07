import "./infoUser.css";
import avatar from "../../../../assets/image/avatar.png";

const Avatar = () => {
  return (
    <div className="avatar-user">
      <img src={avatar} alt="avatar user" />
    </div>
  );
};

export { Avatar };
