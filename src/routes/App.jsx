import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from '../container/Layout';
import Login from '../container/Login';
import RecoveryPassword from '../container/RecoveryPassrowd';
import '../styles/global.css';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound'
import Header from '../components/Header'

const App =()=>{
    return(
        
        <BrowserRouter>
        <Layout>
            
        <Switch>
        
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/recovery-password" component={RecoveryPassword}/>
            <Route path='*' component={NotFound}/>
       
        </Switch>
        </Layout>
        
        </BrowserRouter>
        
       
    )
}

export default App;