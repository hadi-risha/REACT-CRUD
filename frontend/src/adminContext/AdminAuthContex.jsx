import React,{ createContext, useContext, useState, useEffect} from 'react';
import { adminCredentials } from '../../../backend/config/adminCredential';

let LoginContext = createContext();

const AdminAuthContext = ({children}) => {
   
    // const [ isAdminAuth, setIsAdminAuth ] = useState(true);

    const providerDataset = { adminCredentials };   //set cntxt data

  return (
    <LoginContext.Provider value={ providerDataset }>
        {children}
    </LoginContext.Provider>
  )
}

export const LoginData = ()=> useContext(LoginContext);

export default AdminAuthContext;

