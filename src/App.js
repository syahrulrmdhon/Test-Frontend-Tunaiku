import React from 'react';
import {Route} from 'react-router-dom';
import Frontend from './components/pages/Frontend';
import Favicon from 'react-favicon';


const App = () => <div>
    <Favicon url="https://raw.githubusercontent.com/syahrulrmdhon/material-design/master/public/favicon2.ico"/>
    <Route path={process.env.PUBLIC_URL + '/'} exact component={Frontend}/>
</div>

export default App;
