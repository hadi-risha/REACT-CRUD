import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// import Header from './components/Header';
import AdminHeader from './components/AdminHeader';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const AdminApp = () => {
    return (
      <>
        <AdminHeader />
        <ToastContainer />
        <Container className='my-2'>
            <Outlet />
        </Container>
      </>
    )
  }
  
  export default AdminApp;