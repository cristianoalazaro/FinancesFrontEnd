import React from'react';
import {Switch} from 'react-router-dom';

import MyRoute from './MyRoute';
import Index from '../pages/Index';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Page404 from '../pages/Page404';

export default function Routes(){
    return (
            <Switch>
                <MyRoute exact path='/' component={Index} isClosed />
                <MyRoute path='/login' component={Login} />
                <MyRoute path='/signUp' component={SignUp} />
                <MyRoute path='*' component={Page404} />
            </Switch>
    )
}