import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import TitleBar from './titleBar';
import TextField from 'material-ui/TextField';
import './css/signup.css';
import Paper from 'material-ui/Paper';

 export default class Signup extends React.Component{

 	constructor(props){
 		super();
 		this.state={
 			email:'',
 			pass:''
 		}
 	}

	getChildContext() {
                return { muiTheme: getMuiTheme(baseTheme) };
            }

    addUser(ev){

    	console.log(ev.target);
    	ev.preventDefault();

    }

    checkEmail(event){
    	this.setState({
    		email:event.target.value
    	})
    }

    checkPass(event){
    	this.setState({
    		pass:event.target.value
    	})
    }

	render(){
		return(
			<div id='signUp'>

			<TitleBar 
			scrollVal={window.screen.height}			
			showSignIn = {false} 
			showSignUp = {true}
			/>

			<ul class='list'>
				<a href='/contact'><li>Contact Us</li></a>
				<a href='/privacy'><li>Privacy</li></a>
				<a href='/api'><li>About US</li></a>
			</ul>

			<Paper id='form' zDepth={2}><br/><br/>
				<form onSubmit={this.addUser.bind(this)}>
					 <TextField
						hintText="Email"
						type='email'
						name='email'
						onChange={this.checkEmail.bind(this)}
						value={this.state.email}
					/><br/><br/>
					<TextField
						hintText="Password"
						type="password"
						name='password'
						onChange={this.checkPass.bind(this)}
						value={this.state.pass}
					/><br/><br/>
					<TextField
						hintText="Username"
					/><br/><br/>
					<FlatButton type="submit" >Submit</FlatButton>
				</form><br/>
			</Paper>

			</div>
		)
	}
}

Signup.childContextTypes = {
            muiTheme: PropTypes.object.isRequired,
        };