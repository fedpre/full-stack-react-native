import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    const repositories = []

    const { data, error } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
     });
     if (data)
     data.repositories.edges.map(entry => {
         repositories.push(entry);
     })

    return { repositories, error };
};

export default useRepositories;