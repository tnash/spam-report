import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

import ReportState from './context/report/ReportState';
import './App.css';

const App = () => {
	return (
		<ReportState>
			<Router>
				<Fragment>
					<Navbar/>
					<div className="container">
						<Switch>
							<Route exact path='/' component={Home}/>
						</Switch>
					</div>
				</Fragment>
			</Router>
		</ReportState>
	);
}

export default App;
