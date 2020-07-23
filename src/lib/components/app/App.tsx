import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexPage from '../pages/MainPage/MainPage';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={IndexPage} />
        </Switch>
    );
}

export default App;
