import  React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = (repositoryOrder) => {
 let queryInput ={
   first: 6,
   orderBy: repositoryOrder.orderBy,
   orderDirection: repositoryOrder.orderDirection
 }
 
 const {data, loading, fetchMore, ...result} = useQuery(GET_REPOSITORIES, {variables: queryInput, fetchPolicy: 'cache-and-network'});
 const [repositoriesLoading, setRepositoriesLoading] = useState(true)
 const [repositoryNodes, setRepositoryNodes] = useState(undefined);
 
  useEffect(
     () => {
       setRepositoryNodes(data ? data.repositories.edges.map(edge => edge.node) : undefined )
       setRepositoriesLoading(!loading ? false : true)
     },
     [data]
   )

    const handleFetchMore = () => {
    const canFetchMore = !loading && data && data.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...queryInput,
      },

      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };

        return nextResult;
      },
    });
  };

  

return {repositoriesLoading, repositoryNodes, fetchMore: handleFetchMore, ...result};
};


export default useRepositories;