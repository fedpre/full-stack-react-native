import { useContext } from 'react'; 

import AuthStorageContext from '../contexts/authContextStorage';

const useAuthStorage = () => {
  return useContext(AuthStorageContext);
};

export default useAuthStorage;