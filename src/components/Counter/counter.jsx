import React, { Component } from "react";

const Counter = ({ counter, onIncrement, onDecrement, onDelete }) => {
  const styles = {
    fontSize: 12,
    fontWeight: "bold"
  };

  const formatCount = () => {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <React.Fragment>
      <div className="col-1 p-1">
        <span style={styles} className={getBadgeClasses()}>
          {formatCount()}
        </span>
      </div>

      <div className="col">
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm m-1 px-3"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-1 px-3"
          disabled={counter.value <= 0}
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-1 px-3"
        >
          x
        </button>
      </div>
    </React.Fragment>
  );
};

export default Counter;
