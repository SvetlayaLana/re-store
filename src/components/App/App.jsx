import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages'
import Header from "../Header";

const App = () => {
    return (
        <main role='main' className='container'>
            <Header/>
            <Switch>
                <Route exact path='/re-store/' component={HomePage}/>
                <Route exact path='/re-store/cart' component={CartPage}/>
            </Switch>
        </main>
    )
};

export default App;
