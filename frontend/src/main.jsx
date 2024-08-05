import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
  BrowserRouter as Router,
} from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import AdminApp from "./AdminApp.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import PrivateRoute from "./components/PrivateRoute.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
// import AdminAuthState from "./adminContext/AdminAuthState.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import AdminHome from "./screens/AdminHom.jsx"
// import AdminAuthContext from "./adminContext/AdminAuthContex.jsx";
import adminStore from "./adminStore.js";
import { persistor } from "./adminStore.js";
import { PersistGate } from 'redux-persist/integration/react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
      {/* user components */}
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        {/* private route */}
        <Route path="" element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfileScreen />} />
        </Route>
      </Route>


      {/* admin components */}
        <Route path="/admin" element={<AdminApp />}>
              <Route index={true} path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/home" element={<AdminHome />} />
        </Route>
      

    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <Provider store={adminStore}>
      <PersistGate loading={null} persistor={persistor}> */}
        <React.StrictMode>
            <RouterProvider router = {router} />
        </React.StrictMode>
      {/* </PersistGate>
    </Provider> */}
  </Provider>
);
