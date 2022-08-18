import { useMutation } from '@apollo/client'
import { AUTHENTICATE_USER } from '../graphql/mutations';


const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE_USER, {})

    const signIn = async ({ username, password }) => {
        const mutationResult = mutate({ variables: { credentials: {username: username, password: password }}})
        return mutationResult;
    };
    
    return [signIn, result];
};

export default useSignIn;

