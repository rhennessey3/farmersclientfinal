import React from 'react';
import './App.css';
import './global/normalize.css'
import { Switch } from 'react-router-dom'
import PublicRoute from '../src/Utils/PublicRoute'
import PrivateRoute from '../src/Utils/PrivateRoute'
import Header from '../src/components/Header/Header'
import Inventory from './Routes/InventoryPage/Inventory'
import LandingPage from './Routes/LandingPage/LandingPage'
import AddItemPage from './Routes/AddItemPage/AddItemPage'
import SignUpPage from './Routes/SignupPage/SignUpPage'
import LogInPage from './Routes/LoginPage/LoginPage'
import ProductDetail from './Routes/ProductDetailPage/ProductDetail'
import HomePage from './Routes/UserHomePage/HomePage';
import BackButton from '../src/components/BackButton/BackButton';
import { AuthProvider } from './context/AuthContext';


export default class App extends React.Component {

  render() {
    return (
      <AuthProvider>
          <div className='App'>
            <Header />
            <BackButton />
            <Switch>
              <PublicRoute exact path='/' component={LandingPage} />
              <PublicRoute path='/home' component={HomePage} />
              <PrivateRoute exact path='/inventory' component={Inventory} />
              <PrivateRoute path='/add' component={AddItemPage} />
              <PublicRoute path='/signup' component={SignUpPage} />
              <PublicRoute path='/login' component={LogInPage} />
              <PublicRoute path='/inventory/details/:id' component={ProductDetail} />
            </Switch>
          </div>
      </AuthProvider>
    );
  }
}
