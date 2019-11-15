import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages'

import './App.css';


const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/cart' component={CartPage}/>
        </Switch>
    )
};

export default App;