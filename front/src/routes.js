import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Program from './pages/Program';
import Partners from './pages/Partners';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Programa/:id" component={Program} />
                <Route path="/" exact component={Main} />
                <Route path="/Partners" component={Partners} />
            </Switch>
        </BrowserRouter>
    );
}