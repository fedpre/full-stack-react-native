import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query Repositories{
        repositories {
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
                    }
                }
            }
        }
`;