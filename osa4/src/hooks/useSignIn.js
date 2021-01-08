import { useMutation} from '@apollo/react-hooks';
import { LOGIN } from '../graphql/queries';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import AuthStorage from '../utils/authStorage';
import {useApolloClient} from  '@apollo/react-hooks';

const useSignIn = () => {
 
 const authStorage = useContext(AuthStorageContext);
 const [mutate] = useMutation(LOGIN);
 const client = useApolloClient();

  const signIn = async ({ username, password }) => {

   let data = null
   try{
       data = await mutate({variables: { username, password }})
   } catch(error){
   }
   if(data!==null){
      //console.log(data.data.authorize.accessToken)
    await authStorage.setAccessToken(data.data.authorize.accessToken)
    client.resetStore();
   }
   
   return(data)
  }

  return [signIn];
};

export default useSignIn
