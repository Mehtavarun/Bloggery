import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/main';
import Signup from './Components/signup';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<div>
					<Route exact path='/' component={Main} />
					<Route exact path='/signup' component={Signup} />
				</div>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));