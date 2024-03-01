import React from "react";

const SortToggle = ({ sortTodoToBottom }) => {
  return (
    <div className="sort-done">
      <p>Move done things to end?</p>
      <div className="switch">
        <input
          className="switch-checkbox"
          id="switchID1"
          type="checkbox"
          name="switch-checkbox"
          onChange={sortTodoToBottom}
        ></input>
        <label className="switch-label" for="switchID1">
          <span className="switch-txt" turnOn="on" turnOff="off"></span>
          <span className="switch-Round-btn"></span>
        </label>
      </div>
    </div>
  );
};

export default SortToggle;
