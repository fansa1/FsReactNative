import { gql } from 'apollo-boost';


export const GET_REPOSITORIES = gql`
query repositories($first: Int, $after: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection){
    repositories(first: $first, after: $after, orderBy: $orderBy, orderDirection: $orderDirection){
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
         cursor
    }
     pageInfo {
      endCursor
      startCursor
      totalCount
      hasNextPage
    }
  }
}
`;



export const GET_FILTERED_REPOSITORIES = gql`
query repositories($searchKeyword: String){
repositories(searchKeyword: $searchKeyword) {
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

export const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!) {
    deleteReview(id: $id) 
  }
`;


export const AUTHORISED_USER = gql`
query getAuthorizedUser($includeReviews: Boolean = false) {
  authorizedUser {
    id
    username
    reviews @include(if: $includeReviews) {
        edges {
          node {
          id
          repository{
            id
            fullName
          }
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
  }
`;

export const SINGLE_REPOSITORY = gql`
  query ($id: ID!, $first: Int, $after: String){
    repository(id: $id)  {
    id
    fullName
    ownerAvatarUrl
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    reviews(first: $first, after: $after) {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
            }
          }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
        }
      }
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String) {
    createReview(review: {repositoryName: $repositoryName, ownerName: $ownerName, rating: $rating, text: $text}){
        repositoryId
      }
  }
`;


export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(user: {username: $username, password: $password}){
        id
      }
  }
`;