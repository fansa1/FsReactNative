import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import AuthStorage from '../utils/authStorage';


const createApolloClient = (authStorage) => {
  return new ApolloClient({
    request: async (operation) => {
      try {
        const accessToken = await authStorage.getAccessToken();
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
    uri: Constants.manifest.extra.uri
  });
};

export default createApolloClient;