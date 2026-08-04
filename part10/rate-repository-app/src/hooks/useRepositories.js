import { useQuery } from '@apollo/client/react'
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })
  const repositories = data?.repositories;

 

  return { repositories, loading, refetch };
};

export default useRepositories;

// with fetch:
{/*import { useState, useEffect } from 'react';
   const useRepositories = () => { 
    const [repositories, setRepositories] = useState(); 
    const [loading, setLoading] = useState(false); 
    const fetchRepositories = async () => { 
      setLoading(true); const response = await fetch('http://192.168.1.154:5001/api/repositories'); 
      const json = await response.json(); 
      setLoading(false); 
      setRepositories(json); }; 
      useEffect(() => { fetchRepositories(); }, []); 
      return { repositories, loading, refetch: fetchRepositories }; }; 
      export default useRepositories;*/}