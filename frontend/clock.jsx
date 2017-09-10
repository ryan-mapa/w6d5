import React from 'react';

//can export from here too with "export default..."
export default class Clock extends React.Component {

constructor(prop) {
  super(prop);
  this.state = {time: new Date()};
  this.tick = this.tick.bind(this);

}

tick() {
  this.setState({ time: new Date()} );
}

componentDidMount() {
  this.intervalID = setInterval(this.tick,1000);
}

componentWillUnmount() {
  this.intervalID.clearInterval();
}

render() {
  let hours = this.state.time.getHours();
  let minutes = this.state.time.getMinutes();
  let seconds = this.state.time.getSeconds();
  let date = this.state.time.toDateString();
  return (
    <div>
      <h1>Cool Clock</h1>
      <div className='clockbox'>
        <ul>
          <p>
            <span>Time:</span>
            <span> {hours} : {minutes < 10 ? '0' + minutes : minutes} : {
                    seconds < 10 ? '0' + seconds : seconds} </span>
          </p>
          <p>
            <span>Today:</span>
            <span>{date}</span>
          </p>
        </ul>
      </div>
    </div>
  );
}


}

// module.exports = Clock;
