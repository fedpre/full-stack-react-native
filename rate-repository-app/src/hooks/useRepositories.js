import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection) => {
    const repositories = []

    
    const { data, error } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: { 
            orderBy: orderBy, 
            orderDirection: orderDirection, 
        }
     });
     if (data)
     data.repositories.edges.map(entry => {
         repositories.push(entry);
     })

    return { repositories, error };
};

export default useRepositories;