import React from 'react';

const LaunchItem = (props) => {
  return (
    <div>
      <p>Flight Number : {props.flightNumber}</p>
      <p>Mission Name : {props.missionName}</p>
      <p>Rocket Name : {props.rocketName}</p>
      <hr></hr>
    </div>
  );
};

export default LaunchItem;
