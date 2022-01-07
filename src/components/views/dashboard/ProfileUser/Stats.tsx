const Stats = () => {
  return (
    <div className="stats">
      <div className="stats__bar-progress"></div>
      <div className="stats__container">
        <ul>
          <li className="stats__container--item">
            <img src="./" alt="icon" />
            <h3>27</h3>
            <span>Quiz Passed</span>
          </li>
          <li className="stats__container--item">
            <img src="./" alt="icon" />
            <h3>27</h3>
            <span>Time Passed</span>
          </li>
          <li className="stats__container--item">
            <img src="./" alt="icon" />
            <h3>27</h3>
            <span>Average Retention</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Stats };
