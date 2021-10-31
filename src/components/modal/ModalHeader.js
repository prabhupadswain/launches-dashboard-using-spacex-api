import React, { Fragment } from 'react';
import './ModalHeader.css';

const ModalHeader = ({ singleLaunch }) => {
  return (
    <Fragment>
      <h5 id='mn'>Mission Name : {singleLaunch.mission_name}</h5>
      <h5 id='rn'>Rocket Name : {singleLaunch.rocket.rocket_name}</h5>
    </Fragment>
  );
};

export default ModalHeader;
