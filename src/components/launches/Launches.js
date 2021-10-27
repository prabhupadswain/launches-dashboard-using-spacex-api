import React from 'react';
import LaunchItem from './LaunchItem';

const Launches = ({ launches, loading }) => {
  //Check if loading successful or not.
  if (loading) {
    return <h2>Loading...</h2>;
  }

  //Display data in table format
  return (
    <div>
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
          {launches.map((launch, index) => (
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
    </div>
  );
};

export default Launches;
