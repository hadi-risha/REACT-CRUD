import React, { useState, useContext, useEffect } from 'react';
import FormContainer from './FormContainer.jsx';
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col} from 'react-bootstrap';
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useSelector, useDispatch } from 'react-redux';
import { adminCredentials } from '../../../backend/config/adminCredential.js';

const AdminLogin = () => {
    
    const { email, password } = adminCredentials;
    console.log( "........", email,  "........", password);

    const isAdminAuth = useSelector( state => state.admin.isAdminAuth );
    const dispatch = useDispatch();

    const [admin, setAdmin] = useState({
        adminEmail: '',
        adminPassword: '',
    });

    const navigate = useNavigate();

    const { adminEmail, adminPassword } = admin;

    useEffect(() => {
        if ( isAdminAuth === true ) {

            console.log("in useffect block.....isAdminAuth login", isAdminAuth);
            
        navigate('/admin/home');
        }
    }, [navigate, isAdminAuth]);

    

    const onChange = (e) => setAdmin({ ...admin, [e.target.name]: e.target.value });
    

    const submitHandler = (e) => {
        e.preventDefault();
        if (email === adminEmail && password === adminPassword ) {
            console.log("admin login success");
            console.log(email , adminEmail , password , adminPassword);

            dispatch({ type: 'isAuth' });
            navigate('/admin/home');
            // console.log("navigate to home");
            
            // console.log("after isAdminAuth true or false",isAdminAuth);
        }else{
            console.log("og email:",email, "     ", "entered email:", adminEmail,"     ", "og password:", password,"     ", "entered adminPassword:", adminPassword);
            console.log("admin login - invalid credentials");            
        }
    };

    return (
        <FormContainer>
            <h1>Admin Login</h1>
            <h1>{isAdminAuth}</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className='my-2' controlId= 'email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="adminEmail"
                        value={adminEmail}
                        onChange={onChange}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId= 'password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        name="adminPassword"
                        value={adminPassword}
                        onChange={onChange}
                    ></Form.Control>
                </Form.Group>

                {/* { isLoading && <Loader /> } */}

                <Button type='submit' variant='primary' className="mt-3">
                    Log In
                </Button>

            </Form>
        </FormContainer>
    );
};

export default AdminLogin;
