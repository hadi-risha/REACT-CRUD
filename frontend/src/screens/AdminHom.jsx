import React, { useEffect } from 'react';
import { adminCredentials } from '../../../backend/config/adminCredential';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const { email, password } = adminCredentials;

  const isAdminAuth = useSelector( state => state.admin.isAdminAuth)
  const dispatch = useDispatch();

  const navigate = useNavigate();

  console.log("adminCredentials in home", email, password);
  console.log("isAdminAuth in home", isAdminAuth);

  useEffect(() => {
    if (isAdminAuth === false) {

        console.log("in useffect block.....isAdminAuth home", isAdminAuth);
        
        navigate('/admin/login');
    }
}, [navigate, isAdminAuth]);


const logoutHandle = ()=> {
  dispatch({ type: 'logOut' });

}
  
  

  return (
    <div>
      <h1>admin home</h1>
      <button onClick={logoutHandle}>Sign out</button>
    </div>
  )
}

export default HomeScreen
