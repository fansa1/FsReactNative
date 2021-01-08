import  React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_FILTERED_REPOSITORIES } from '../graphql/queries';


const useFilteredRepositories = (searchKeyWord) => {
//console.log(repositoryOrder)

 
 const {data} = useQuery(GET_FILTERED_REPOSITORIES, {variables: searchKeyWord, fetchPolicy: 'cache-and-network'});
 const [filteredRepositoriesLoading, setFilteredRepositoriesLoading] = useState(true)
 const [filteredRepositoryNodes, setFilteredRepositoryNodes] = useState(null);
 
  useEffect(
     () => {
       setFilteredRepositoryNodes(data ? data.repositories.edges.map(edge => edge.node) : null )
       setFilteredRepositoriesLoading(false)
     },
     [data]
   )

return {filteredRepositoriesLoading, filteredRepositoryNodes};
};


export default useFilteredRepositories;