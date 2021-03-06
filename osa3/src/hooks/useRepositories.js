import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {

const { data, error, loading } = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network'})
const [repositories, setRepositories] = useState();


  return { data, loading, error, };
};

export default useRepositories;