import React from 'react';

const LaunchItem = (props) => {
  //Formating date into UTC
  let date = new Date(props.launchDate).toUTCString();

  //Defining Launch Status
  const launchStatus = props.upcomingFlag
    ? 'Upcoming'
    : props.launchFlag
    ? 'Success'
    : 'Failed';

    //Returning the jxs code
  return (
    <tr>
      <td>{props.flightNumber}</td>
      <td>{date}</td>
      <td>{props.locationName}</td>
      <td>{props.missionName}</td>
      <td>{props.orbitName}</td>
      <td>{launchStatus}</td>
      <td>{props.rocketName}</td>
    </tr>
  );
};
export default LaunchItem;
