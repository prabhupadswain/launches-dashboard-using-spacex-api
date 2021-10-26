import React from 'react';
import LaunchItem from './LaunchItem';

const Launches = ({ launches, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <LaunchItem
        flightNumber={launches[0].flight_number}
        missionName={launches[0].mission_name}
        rocketName={launches[0].rocket.rocket_name}
      />
      <LaunchItem
        flightNumber={launches[1].flight_number}
        missionName={launches[1].mission_name}
        rocketName={launches[1].rocket.rocket_name}
      />
      <LaunchItem
        flightNumber={launches[2].flight_number}
        missionName={launches[2].mission_name}
        rocketName={launches[2].rocket.rocket_name}
      />
    </div>
  );
};

export default Launches;
