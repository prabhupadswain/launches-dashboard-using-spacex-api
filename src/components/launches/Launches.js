import React from 'react';

const Launches = ({ launches, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <p>Flight Number : {launches[0].flight_number}</p>
      <p>Mission Name : {launches[0].mission_name}</p>
      <p>Rocket Name : {launches[0].rocket.rocket_name}</p>
    </div>
  );
};

export default Launches;
