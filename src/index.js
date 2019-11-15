import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundry";
import bookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from "./components/BookstoreServiceContext";
import store from "./store";
import Spinner from "./components/Spinner";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App/>
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);