import React, { Component } from "react";
import Die from "./Die";

class DiceRoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "four",
      isRolling: false
    };
  }

  handleClick = () => {
    let randomIndex = Math.floor(Math.random() * this.props.die.length);
    let randomIndex2 = Math.floor(Math.random() * this.props.die.length);
    this.setState({
      isRolling: true,
      die1: this.props.die[randomIndex],
      die2: this.props.die[randomIndex2]
    });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 2000);
  };
  render() {
    console.log(this.props.die);
    return (
      <div className="container">
        <div className="dice-wrap">
          <Die face={this.state.die1} isRolling={this.state.isRolling} />
          <Die face={this.state.die2} isRolling={this.state.isRolling} />
        </div>
        <div>
          <button onClick={this.handleClick} disabled={this.state.isRolling}>
            {this.state.isRolling ? "Rolling..." : "Roll Dice"}
          </button>
        </div>
      </div>
    );
  }
}
export default DiceRoll;
DiceRoll.defaultProps = {
  die: ["one", "two", "three", "four", "five", "six"]
};
