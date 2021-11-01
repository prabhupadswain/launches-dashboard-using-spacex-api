import React, { useState } from 'react';

import LaunchesList from './LaunchesList';
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
      <LaunchesList items={filteredLaunches} />
    </div>
  );
};

export default Launches;
