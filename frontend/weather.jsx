import React from 'react';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const here = navigator.geolocation.getCurrentPosition();
    console.log(here);
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>{console.log("here")}</div>
  );
  }

}
