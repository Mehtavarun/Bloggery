import React from 'react';
import './css/titleBar.css';
import "animate.css/animate.min.css";
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

export default class TitleBar extends React.Component{

	// constructor(props){
	// 	super(props);
	// 	this.state = {
			// pageYOffset:this.props.scrollVal,
			// showSignInButton:this.props.showSignIn,
			// showSignUpButton:this.props.showSignUp,
			// showLogoutButton:this.props.showSignOut
	// 	}
	// }

	getChildContext() {
                return { muiTheme: getMuiTheme(baseTheme) };
            }

 //    componentDidMount(){
 //    	window.addEventListener('scroll',()=>{
	// 		this.setState({
	//     		pageYOffset:window.pageYOffset
	//     	});
 //    	})    	
	// }
    
	render(){
		return(
			<div className = "wrapper">
				
				{( window.pageYOffset>= this.props.scrollVal)?
				
					<div  className='appBar animated slideInDown' >
				
						<p id='barTitle'><a href='/'>BLOGGERY</a></p>
				
						{
							(this.props.showSignIn)? 
								<FlatButton 
								style={barButtons}
								href='/signin'>
								Sign In
								</FlatButton>
							: 	null
						}
				
						{
							(this.props.showSignUp)? 
								<FlatButton href='/signup'
								style={barButtons}>
								Sign Up
								</FlatButton>
							: 	null
						}
		
					</div>
				:
					<div  className='appBar animated slideOutUp' > </div>
					}
			</div>
      )
	}
}


const barButtons={
	color:'white',
	border:'0px white solid',
	borderRadius:'5%',
	backgroundColor:'#00838F',
	marginRight:'35px',
	marginTop:'12px',
	float:'right',
	fontSize:'150%',
	paddingRight:'15px',
	paddingLeft:'15px',
	paddingBottom:'37px',
	paddingTop:'2px'
}

