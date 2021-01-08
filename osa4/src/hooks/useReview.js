import { useMutation} from '@apollo/react-hooks';
import { CREATE_REVIEW } from '../graphql/queries';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import AuthStorage from '../utils/authStorage';
import {useApolloClient} from  '@apollo/react-hooks';

const useReview = () => {
 
 const [mutate] = useMutation(CREATE_REVIEW);

  const submitReview = async ({ repositoryName, ownerName, rating, text }) => {

   let data = null
   try{
       data = await mutate({variables: { repositoryName, ownerName, rating, text }})
       //console.log(data)
   } catch(error){
   }
   
   return(data)
  }

  return [submitReview];
};

export default useReview
