import React from "react";
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from './context';

// Routes
import routes from './routes';

const App = () => (
    <Provider>
        <Router>
            <Switch>
                {routes.map((route, index) => (
                    <Route key={index} {...route} />
                ))}
            </Switch>
        </Router>
    </Provider>
);

export default App;

