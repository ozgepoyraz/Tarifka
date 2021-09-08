import React, {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const {data} = await axios.get(url);
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(err.messages);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error};
};

export default useFetch;
