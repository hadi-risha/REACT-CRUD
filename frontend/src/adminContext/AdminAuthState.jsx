// import React, { useReducer } from 'react';
// import axios from 'axios';
// import AdminAuthContext from './AdminAuthContex';
// // import AuthReducer from './AuthReducer';
// import AdminAuthReducer from './AdminAuthReducer';

// import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';

// const AdminAuthState = (props) => {
//     const initialState = {
//         token: localStorage.getItem('token'),
//         isAuthenticated: null,
//         loading: true,
//         user: null,
//         error: null,
//     };

//     const [state, dispatch] = useReducer(AdminAuthReducer, initialState);

//     // Login User
//     const login = async (formData) => {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         };

//         try {
//             const res = await axios.post('/api/auth/login', formData, config);

//             dispatch({
//                 type: LOGIN_SUCCESS,
//                 payload: res.data,
//             });

//             loadUser();
//         } catch (err) {
//             dispatch({
//                 type: LOGIN_FAIL,
//                 payload: err.response.data.msg,
//             });
//         }
//     };

//     // Load User
//     const loadUser = async () => {
//         if (localStorage.token) {
//             axios.defaults.headers.common['x-auth-token'] = localStorage.token;
//         }

//         try {
//             const res = await axios.get('/api/auth');

//             dispatch({
//                 type: USER_LOADED,
//                 payload: res.data,
//             });
//         } catch (err) {
//             dispatch({ type: AUTH_ERROR });
//         }
//     };

//     // Logout
//     // const logout = () => dispatch({ type: LOGOUT });
//     const logout = async () => {
//         try {
//             await axios.post('/api/auth/logout');
//             dispatch({ type: LOGOUT });
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     return (
//         <AdminAuthContext.Provider
//             value={{
//                 token: state.token,
//                 isAuthenticated: state.isAuthenticated,
//                 loading: state.loading,
//                 user: state.user,
//                 error: state.error,
//                 login,
//                 logout,
//                 loadUser,
//             }}
//         >
//             {props.children}
//         </AdminAuthContext.Provider>
//     );
// };

// export default AdminAuthState;
