import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      time: new Date()
    };
    // this.tick = this.tick.bind(this);
  }
  
  render() {
    return (
      <div class="donut">
        <div class="clock">
          <h1 id="clock">Clock</h1>
          <p id="clock">
            {this.state.time.getHours()+ " "}:
            {" " + this.state.time.getMinutes()+ " "}:
            {" " + this.state.time.getSeconds()}
          </p>
          <h1 id="clock">Date</h1>
          <p id="clock">
            {this.state.time.toDateString() + " "}
          </p>
        </div>
      </div>
    );
  }
  
  tick() {
    this.setState({time: new Date()});
  }
  
  componentDidMount() {
    // this.interval = setInterval(this.tick, 1000);
    this.interval = setInterval(() => this.tick(), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Clock;