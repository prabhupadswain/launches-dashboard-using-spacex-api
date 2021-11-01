import React from 'react';

import './LaunchesFilter.css';

const LaunchesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='launches_filter'>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value='All'>All Launches</option>
        <option value='Upcoming'>Upcoming Launches</option>
        <option value='Success'>Successful Launches</option>
        <option value='Failed'>Failed Launches</option>
      </select>
    </div>
  );
};

export default LaunchesFilter;
