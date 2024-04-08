// YourProjectDirectory/frontend/src/app/hooks/useFetch.ts
import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null); // Changed to any for generalization
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null); // Changed to any to handle various error types

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        setError(err as Error); // Cast err to Error type
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
