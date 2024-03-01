import React from "react";

const Progress = ({ completionRate }) => {
  return (
    <div className="progress">
      <span>{completionRate}%</span>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${completionRate}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
