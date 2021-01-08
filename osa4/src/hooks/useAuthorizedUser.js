import  React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { AUTHORISED_USER } from '../graphql/queries';


const useAuthorizedUser = (message) => {
  let queryInput = {includeReviews: false}
  let helper = false
  if(message==="getReviews"){
    queryInput = {includeReviews: true}
    helper = true
  }
 
// console.log(queryInput)
 const {data} = useQuery(AUTHORISED_USER, {variables: queryInput, fetchPolicy: 'cache-and-network'});
 const [authorizedUserLoading, setAuthorizedUserLoading] = useState(true)
 const [authorizedUser, setAuthorizedUser] = useState(null);
 const [reviewItems, setReviewItems] = useState(undefined)
 //console.log(data)
 
  useEffect(
     () => {
       setAuthorizedUser(data ? data.authorizedUser : null )
       setAuthorizedUserLoading(false)
       setReviewItems(data&&helper? data.authorizedUser.reviews.edges.map(o=>o.node) : undefined )
     },
     [data]
   )

return {authorizedUserLoading, authorizedUser, reviewItems};
};


export default useAuthorizedUser;