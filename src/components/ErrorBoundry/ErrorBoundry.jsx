import React from 'react';
import ErrorIndicator from "../ErrorIndicator";

class ErrorBoundary extends React.Component{
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        const { hasError } = this.state;

        if (hasError)
            return <ErrorIndicator />

        return this.props.children;
    }
};

export default ErrorBoundary;