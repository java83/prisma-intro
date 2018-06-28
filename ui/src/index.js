
import React, { Fragment } from 'react';
import './index.css';
import ApolloClient from 'apollo-boost';
import  ReactDOM  from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import Routes from './AppBar/Routes'
import Nav from './AppBar/Nav'
import { BrowserRouter as Router } from 'react-router-dom';


const client = new ApolloClient({
    uri: "https://us1.prisma.sh/djavohir-9e2845/hello-world/dev"
});

const App = () => (
    <ApolloProvider client={client}>
        <Router>
            <Fragment>
                <Nav/>
                <Routes/>
            </Fragment>
        </Router>
    </ApolloProvider>
);
ReactDOM.render(<App/>, document.getElementById('root'));

