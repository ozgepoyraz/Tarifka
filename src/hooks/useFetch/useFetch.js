import React, {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = url => {
  console.log(url)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      const {data: data} = await axios.get(url);
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return {data, loading, error};
};

export default useFetch;
