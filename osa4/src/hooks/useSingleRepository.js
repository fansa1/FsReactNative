import  React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SINGLE_REPOSITORY } from '../graphql/queries';


const useSingleRepository = (variableId) => {
console.log(variableId)
 let queryInput ={
   first: 8,
   id: variableId.id
 }
 
 const {data, loading, fetchMore, ...result} = useQuery(SINGLE_REPOSITORY, {variables: queryInput, fetchPolicy: 'cache-and-network'});
 const [repositoryLoading, setRepositoryLoading] = useState(true)
 const [reviewItems, setReviewItems] = useState([]);
const [item, setItem] = useState('');

const restOfItems = (data) => {
    let {reviews, ...rest} = data.repository
    return(
        rest
    )
}
 
  useEffect(
     () => {
       setReviewItems(data ? data.repository.reviews.edges.map(o=>o.node) : undefined )
       setItem(data ? restOfItems(data) : undefined)
       setRepositoryLoading(!loading ? false : true)
     },
     [data]
   )

    const handleFetchMore = () => {
    const canFetchMore = !loading && data && data.repository.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: SINGLE_REPOSITORY,
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...queryInput,
      },

      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          reviews: {
            ...fetchMoreResult.reviews,
            edges: [
              ...previousResult.reviews.edges,
              ...fetchMoreResult.reviews.edges,
            ],
          },
        };

        return nextResult;
      },
    });
    };
return {repositoryLoading, reviewItems, item, fetchMore: handleFetchMore, ...result};
};


export default useSingleRepository;
