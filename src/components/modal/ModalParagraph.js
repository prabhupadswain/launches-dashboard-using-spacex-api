import React, { Fragment } from 'react';

import './ModalParagraph.css';

const ModalParagraph = ({ singleLaunch }) => {
  return (
    <Fragment>
      <p>
        Flight Number : <span>{singleLaunch.flight_number}</span>
      </p>
      <p>
        Mission Name : <span>{singleLaunch.mission_name}</span>
      </p>
      <p>
        Rocket Type : <span>{singleLaunch.rocket.rocket_type}</span>
      </p>
      <p>
        Rocket Name : <span>{singleLaunch.rocket.rocket_name}</span>
      </p>
      <p>
        Manufacturer :
        <span>{singleLaunch.rocket.second_stage.payloads[0].manufacturer}</span>
      </p>
      <p>
        Nationality :
        <span>{singleLaunch.rocket.second_stage.payloads[0].nationality}</span>
      </p>
      <p>
        Launch Date :
        <span>{new Date(singleLaunch.launch_date_utc).toUTCString()}</span>
      </p>
      <p>
        Payload Type :
        <span>{singleLaunch.rocket.second_stage.payloads[0].payload_type}</span>
      </p>
      <p>
        Orbit :
        <span>{singleLaunch.rocket.second_stage.payloads[0].orbit}</span>
      </p>
      <p>
        Launch Site : <span>{singleLaunch.launch_site.site_name}</span>
      </p>
    </Fragment>
  );
};

export default ModalParagraph;
