import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String){
        repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
            edges {
                node {    
                    fullName
                    description
                    language
                    forksCount
                    stargazersCount
                    reviewCount
                    ratingAverage
                    ownerAvatarUrl
                    id
                    url
                    reviews {
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
                        }
                    }
                }
            }
        }
    }`;

export const CHECK_AUTHENTICATED_USER = gql`
    {
        me {
            id
            username
        }
    }
`