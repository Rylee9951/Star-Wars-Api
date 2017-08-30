import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Explorer from './components/Explorer';
import Layout from './components/Layout'
import Starships from './components/Starships';
import Films from './components/Films';
import People from './components/People';
import registerServiceWorker from './registerServiceWorker';

import './styles/App.css';

ReactDOM.render((
	<Router>
		
			<Layout>
				<Switch>
					<Route exact path='/' component={Explorer} />
					<Route path='/starships' component={Starships}/>
					<Route path='/films' component={Films} />
					<Route path='/characters' component={People} />
				</Switch>
			</Layout>
		
	</Router>

), document.getElementById('root'));
registerServiceWorker();
