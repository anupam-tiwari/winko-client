import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

import { Auth0Provider } from "@auth0/auth0-react";

import Layout from './components/layout/Layout'
import Home from './pages/Home';
import Customers from './pages/Customers';


const store = createStore(
  rootReducer
)

document.title = 'Winko CRM'

ReactDOM.render(
  <Auth0Provider
    domain="dev-pxalzf-a.us.auth0.com"
    clientId="1tvAyrCcIT4Kmmo3v9A7sm6YtibN93tH"
    redirectUri={window.location.origin}
  ><BrowserRouter>
  <Provider store={store}>
      <React.StrictMode>
        <Home></Home>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
