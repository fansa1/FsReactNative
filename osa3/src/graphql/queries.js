import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query {
    repositories{
      edges{
        node{
          id
          ownerAvatarUrl
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
     }
  }
}
`;

export const LOGIN = gql`
  mutation authorize($username: String!, $password: String!) {
    authorize(credentials: {username: $username, password: $password})  {
      accessToken
    }
  }
`;

export const AUTHORISED_USER = gql`
query {
  authorizedUser {
    id
    username
  }
}
`;