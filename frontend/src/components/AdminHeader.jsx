import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useLogoutMutation } from '../slices/usersApiSlice';
// import { logout } from '../slices/authSlice';

const Header = () => {
//   const { userInfo } = useSelector((state) => state.auth);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [logoutApiCall] = useLogoutMutation();

//   const logoutHandler = async () => {
//     try{
//       await logoutApiCall().unwrap();
//       dispatch(logout());
//       navigate('/');
//     }catch(err) {
//       console.error(err);
//     }
//   };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>

          {/* <LinkContainer to='/'>
            <Navbar.Brand>React CRUD</Navbar.Brand>
          </LinkContainer> */}

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
            
                <>
                  <LinkContainer to=''>
                    <Nav.Link>
                       Admin
                    </Nav.Link>
                  </LinkContainer>
                </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;