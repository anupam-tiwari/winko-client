import React, {useEffect} from "react";

import { useAuth0 } from "@auth0/auth0-react";

import { BrowserRouter, Link, Route, Router, Switch } from "react-router-dom";

import Layout from "../components/layout/Layout";

import { useSelector, useDispatch } from 'react-redux'

import logo from '../assets/images/logo.png'

import './Home.css'

import Routes from "../components/Routes";

import Topnav from "../components/topnav/TopNav";

import Loading from "../components/loading/loading";

import initFontAwesome from "../utils/initFontAwesome";

import ThemeAction from '../redux/reducers/ThemeReducer'

import { Button } from "reactstrap";
initFontAwesome();




const Home = () => {

   



    const { loginWithRedirect, logout , user , isAuthenticated, isLoading, error} = useAuth0();
    console.log(user)
    console.log(isAuthenticated)

    if (error) {
        return <div>Oops... {error.message}</div>;
      }
    
      if (isLoading) {
        return <Loading />;
      }

    

    return (
    <BrowserRouter>
    
    
        
             <Topnav></Topnav>
    <div>
        {isAuthenticated && <Routes></Routes>}
        
    </div>
         

    

    </BrowserRouter>

    )

}

export default Home;