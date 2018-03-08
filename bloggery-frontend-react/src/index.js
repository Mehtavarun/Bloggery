import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/main';
import Signup from './Components/signup';
import Signin from './Components/signin';
import Dashboard from './Components/dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<div>
					<Route exact path='/' component={Main} />
					<Route exact path='/signup' component={Signup} />
					<Route exact path='/signin' component={Signin} />
					<Route exact path='/dashboard' component={Dashboard} />
				</div>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));