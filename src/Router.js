import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Main from './components/pages/main';
import Admin from './components/pages/admin';
const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin">
                    <Admin />
                </Route>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;