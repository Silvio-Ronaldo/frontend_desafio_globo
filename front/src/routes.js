import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import EncontroFB from './pages/Programs/EncontroFB/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Programs/:id" component={EncontroFB} />
            </Switch>
        </BrowserRouter>
    );
}