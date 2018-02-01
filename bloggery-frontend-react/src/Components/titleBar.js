import React from 'react';
import './css/titleBar.css';
import "animate.css/animate.min.css";
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import FlatButton from 'material-ui/FlatButton';

export default class TitleBar extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			pageYOffset:this.props.scrollVal,
			showSignInButton:this.props.showSignIn,
			showSignUpButton:this.props.showSignUp
		}
	}

	getChildContext() {
                return { muiTheme: getMuiTheme(baseTheme) };
            }

    componentDidMount(){
    	window.addEventListener('scroll',()=>{
			this.setState({
	    		pageYOffset:window.pageYOffset
	    	});
    	})    	
	}
    
	render(){
		return(
			<div className = "wrapper">
				{(this.state.pageYOffset >= window.screen.height/4)?
					<div  className='appBar animated slideInDown' >
						<p id='barTitle'>BLOGGERY</p>
						{
							(this.state.showSignInButton)? 
							<FlatButton style={barButtons}>Sign In</FlatButton>
							: 	null
						}
						{
							(this.state.showSignUpButton)? 
							<FlatButton style={barButtons}>Sign Up</FlatButton>
							: 	null
						}
					</div>
				:null}
			</div>
      )
	}
}


const barButtons={
	color:'white',
	border:'1px white solid',
	borderRadius:'5%',
	marginRight:'15px',
	marginTop:'-10px',
	fontSize:'150%',
	paddingRight:'10px',
	paddingLeft:'10px',
	paddingBottom:'35px',
	paddingTop:'2px'
}

