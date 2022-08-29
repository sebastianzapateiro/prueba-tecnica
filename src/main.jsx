import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouters from './routers/AppRouters';
import NavBar from './components/NavBar';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AppRouters/>
  </React.StrictMode>
)
