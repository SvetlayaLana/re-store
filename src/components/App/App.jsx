import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages'
import Header from "../Header";

const App = () => {
    return (
        <main role='main' className='container'>
            <Header countItems={3} totalPrice={234}/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/cart' component={CartPage}/>
            </Switch>
        </main>
    )
};

export default App;
