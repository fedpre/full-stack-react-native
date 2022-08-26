import { gql } from "@apollo/client";

export const AUTHENTICATE_USER = gql`
    mutation Mutation($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation CreateReview($review: CreateReviewInput) {
        createReview(review: $review) {
        id
        user {
            username
            createdAt
        }
        repository {
            fullName
        }
        userId
        repositoryId
        rating
        createdAt
        text
        }
    }
`;

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
      createdAt
    }
  }
`;