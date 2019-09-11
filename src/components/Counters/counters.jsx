import React, { Component } from "react";
import Counter from "../Counter/counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;

    return (
      <div>
        <div className="row">
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">
            Reset
          </button>
        </div>
        {counters.map(counter => (
          <div className="row">
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              counter={counter}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
