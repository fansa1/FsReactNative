import { useMutation} from '@apollo/react-hooks';
import { CREATE_USER } from '../graphql/queries';


const useSignUp = () => {
 
 const [mutate] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {

   let data = null
   try{
       data = await mutate({variables: { username, password }})
   } catch(error){
   }
   
   return(data)
  }

  return [signUp];
};

export default useSignUp
