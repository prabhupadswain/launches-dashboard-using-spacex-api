import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/ui/Header';

const App = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchLaunches = async () => {
      const result = await axios('https://api.spacexdata.com/v3/launches');
      //Check if data is coming from API or not. Printing data on the JS console 
      //if data successfully fetched from API.
      console.info(result.data) 
    };

    fetchLaunches();

  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
