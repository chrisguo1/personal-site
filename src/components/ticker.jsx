import React from 'react';
import "./ticker.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}; //todo: set 
  }

  // called when clock component output (from render) is added into DOM
  // asks browser to call Clock's tick component every 1s
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  //if clock is remove from dom, we stop the timer.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //when tick is called we set the state with the new time
  //state has changed so react knows to call render again.
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2 class='text-slate-500'>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class Ticker extends React.Component {
  render() {
    return (
        <div class="my-6 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 text-black">
          <Clock />
      </div>
    );
  }
}


export default Ticker;

