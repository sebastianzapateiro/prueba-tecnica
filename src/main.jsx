import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouters from './routers/AppRouters';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}> 
    <AppRouters/>
  </Provider>
)
