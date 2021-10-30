import React, { useState } from 'react';

import LaunchItem from './LaunchItem';
import LaunchesFilter from './LaunchesFilter';
import Spinner from '../ui/Spinner';

const Launches = ({ launches, loading }) => {
  const [filteredLaunchStatus, setFilteredLaunchStatus] = useState('All');

  const filterChangeHandler = (selectedLaunchStatus) => {
    setFilteredLaunchStatus(selectedLaunchStatus);
  };

  //Implementing the filtering launches logic here below.
  const filteredLaunches = launches.filter(checkLaunchStatus);

  //Passing function as an argument to array.filter helper method
  function checkLaunchStatus(launch) {
    if (!launch.upcoming) {
      if (!launch.launch_success) return filteredLaunchStatus === 'Failed';
      else return filteredLaunchStatus === 'Success';
    } else if (launch.upcoming) return filteredLaunchStatus === 'Upcoming';
    else return filteredLaunchStatus === 'All';
  }

  //Check if loading successful or not.
 if (loading) {
  return <Spinner />; //Implementing the loading spinner
}

  //Display data in table format
  return (
    <div>
      <LaunchesFilter
        selected={filteredLaunchStatus}
        onChangeFilter={filterChangeHandler}
      />
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
          {filteredLaunches.map((launch, index) => (
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
