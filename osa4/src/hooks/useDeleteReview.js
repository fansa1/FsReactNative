import  React, {useState, useEffect} from 'react';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_REVIEW, AUTHORISED_USER } from '../graphql/queries';


const useDeleteReview = () => {
  
 const [mutate] = useMutation(DELETE_REVIEW, {refetchQueries: [{query: AUTHORISED_USER, variables: {includeReviews: true}}]})

  const deleteReview = async ({id}) => {
  console.log(id)
   let data = null
   try{
       data = await mutate({variables:  {id} })

   } catch(error){
   }
   
   return(data)
  }

  return [deleteReview];
};

export default useDeleteReview;