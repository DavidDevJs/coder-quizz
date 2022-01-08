import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { RiTimerFlashFill } from "react-icons/ri";
import { AiOutlineAreaChart } from "react-icons/ai";

import "./infoUser.css";

const Stats = () => {
  const profession = "Frontend Dev";

  return (
    <div className="stats">
      <div className="stats__name-user">
        <h2>David Gonzalez</h2>
        <h4>{`<${profession}/>`}</h4>
      </div>
      <div className="stats__bar-progress"></div>
      <ul className="stats__list">
        <li className="stats__list--item">
          <div className="item__first">
            <BsFillBookmarkCheckFill size={24} />
            <h3>27</h3>
          </div>
          <span>Successful</span>
        </li>
        <li className="stats__list--item">
          <div className="item__first">
            <RiTimerFlashFill size={24} />
            <h3>8h</h3>
          </div>
          <span>Time</span>
        </li>
        <li className="stats__list--item">
          <div className="item__first">
            <AiOutlineAreaChart className="item__icon" />
            <h3>27%</h3>
          </div>
          <span>Retention</span>
        </li>
      </ul>
    </div>
  );
};

export { Stats };
