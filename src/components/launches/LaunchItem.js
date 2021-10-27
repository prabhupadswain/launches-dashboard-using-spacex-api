import React from 'react';

import './LaunchItem.css';

const LaunchItem = (props) => {
  //Formating date into UTC
  let date = new Date(props.launchDate).toUTCString();

  //Defining Launch Status
  const launchStatus = props.upcomingFlag
    ? 'Upcoming'
    : props.launchFlag
    ? 'Success'
    : 'Failed';

  //Setting button classes
  let classes = 'btn ';
  if (launchStatus === 'Upcoming') classes = classes + 'btn-warning';
  else if (launchStatus === 'Success') classes = classes + 'btn-success';
  else classes = classes + 'btn-danger';

  //Returning the jxs code
  return (
    <tr>
      <td>{props.flightNumber}</td>
      <td>{date}</td>
      <td>{props.locationName}</td>
      <td>{props.missionName}</td>
      <td>{props.orbitName}</td>
      <td>
        <button className={classes}>{launchStatus}</button>
      </td>
      <td>{props.rocketName}</td>
    </tr>
  );
};
export default LaunchItem;
