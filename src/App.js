import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/ui/Header';
import Launches from './components/launches/Launches';

const App = () => {
  //React hook useState() used to keep the state of application and update when required.
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  //Fetching data using useEffect()
  useEffect(() => {
    const fetchLaunches = async () => {
      const result = await axios('https://api.spacexdata.com/v3/launches');
      //Setting the data fetched from API to launches state.
      setLaunches(result.data);
      //Changing the loading state to flase.
      setLoading(false);
    };

    fetchLaunches();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Launches launches={launches} loading={loading} />
    </div>
  );
};

export default App;
