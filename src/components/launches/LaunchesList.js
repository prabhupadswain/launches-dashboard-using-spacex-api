import React from 'react';

import LaunchItem from './LaunchItem';
import './LaunchesList.css';

const LaunchesList = (props) => {
  //Showing empty state indicator
  if (props.items.length === 0)
    return (
      <p className='empty_message'>
        No results found for this filter.Please select Upcoming, Failed or
        Successful launches from dropdown
      </p>
    );

  //Showing data in table format
  return (
    <table className='table table-bordered table-hover'>
      <thead>
        <tr>
          <th>No :</th>
          <th>Launched(UTC)</th>
          <th>Location</th>
          <th>Mission</th>
          <th>Orbit</th>
          <th>Launch Status</th>
          <th>Rocket</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((launch, index) => (
          <LaunchItem
            key={index}
            flightNumber={launch.flight_number}
            launchDate={launch.launch_date_utc}
            locationName={launch.launch_site.site_name}
            missionName={launch.mission_name}
            orbitName={launch.rocket.second_stage.payloads[0].orbit}
            rocketName={launch.rocket.rocket_name}
            upcomingFlag={launch.upcoming}
            launchFlag={launch.launch_success}
          />
        ))}
      </tbody>
    </table>
  );
};

export default LaunchesList;
