import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom';

import Home from '../sahifa/Home'
import Characters from '../sahifa/Characters';
import Items from '../sahifa/Items'

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Home}/>
                <Route path="/chars" component={Characters}/>
                <Route path="/items" component={Items}/>
            </Fragment>
        )
    }
}