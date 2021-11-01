import React, { Fragment } from 'react';

import spinner from '../../img/spinner.gif';
import './Spinner.css';

const Spinner = () => (
  <Fragment>
    <img className='img' src={spinner} alt='Loading...' />
  </Fragment>
);

export default Spinner;
