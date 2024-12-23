import React, { Component } from "react";

export class MapingState extends Component {
  state = {
    first: "Loading...",
    second: "Loading...",
    third: "Loading...",
    fourth: "Loading...",
    doneMessage: "finished!",
  };
  
  render() {
setTimeout(() => {
  this.setState({ first: "Done" });
}, 3000);

setTimeout(() => {
    this.setState({second : "Done"});
},3000)

setTimeout(() => {
    this.setState({third : "Done"});
},3000)

setTimeout(() => {
    this.setState({fourth : "finished!"})
},3000)
    const { state } = this;

    return (
      <>
        <ul>
          {Object.keys(state)
            .filter((key) => key !== "finished!")
            .map((key) => (
              <li key={key}>
                <strong> {key} : </strong>
                {state[key]}
              </li>
            ))}
        </ul>
      </>
    );
  }
}


