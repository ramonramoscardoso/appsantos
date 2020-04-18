import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Index';
import News from './pages/News/Index';
import Professionals from './pages/Professionals/Index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/news/:id" component={News}/>
                <Route path="/professionals" component={Professionals}/>
            </Switch>
        </BrowserRouter>
    );
}