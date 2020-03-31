import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Display from './pages/Display'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Display} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;