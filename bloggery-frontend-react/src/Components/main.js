import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import "animate.css/animate.min.css";
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import PropTypes from 'prop-types';
import {deepPurple50} from 'material-ui/styles/colors';
import ScrollAnimation from 'react-animate-on-scroll';
import FlatButton from 'material-ui/FlatButton';
import image3 from './images/3.jpg';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';

export default class Main extends React.Component{

	constructor(){
		super();
		this.state = {
			scrollValue:0,
			pageYOffset:window.pageYOffset
		}
	}

	getChildContext() {
                return { muiTheme: getMuiTheme(baseTheme) };
            }

    handleScroll(){
    	window.scrollBy(0,(this.state.scrollValue%3===0)?516:582);
    	this.setState((prevState=>{
    		scrollValue:prevState.scrollValue++
    	}))
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
				{(this.state.pageYOffset >= 258)?
					<div  className='appBar animated slideInDown' >
						<h3>BLOGGERY</h3>
					</div>
					:null}
				<FloatingActionButton className="animated fadeInUp" 
					style={style} 
					backgroundColor="orange"
					onClick={this.handleScroll.bind(this)}>
			 			<ArrowDownward color={deepPurple50} />
			 	</FloatingActionButton>
			 	<Top />
				<Mid />
				<Bottom />
			</div>
      )
	}
}

class Top extends React.Component{

	constructor(props){
		super();
	}
	render(){
		return(
			<div className = "top animated fadeInDown">
					
			 	<h2 className = "animated fadeInDown">start blog today.</h2>
			 	<p className = "topText animated fadeIn">you will never forget experience with<br/> bloggery...</p>
			 	<FlatButton 
			 		id = "getStartedButton" 
			 		backgroundColor= '#a4c639' 
			 		hoverColor="#8AA62F" 
			 		className = "animated fadeInLeft" 
			 		style={styleButton[0]}>
			 			Get Started
			 	</FlatButton><br/>
			 	<FlatButton 
			 		id = "signInButton" 
			 		backgroundColor= '#3d5afe' 
			 		hoverColor="#304FFE"
			 		className = "animated fadeInRight"
			 		style={styleButton[1]}>
			 			Sign In
			 	</FlatButton><br/>
			</div>
		)
	}
}

class Mid extends React.Component{

	constructor(props){
		super();
	}

	render(){
		return(
			<div className = 'middle'>			
			<div className = 'middle1'>
				<ScrollAnimation animateIn="fadeInLeft" >
					<p className='firstBlock'>Turns out that when you make it
					easy to create interesting things, 
					that’s exactly what people do. All
					those great, random blogs your friends
					send you, those are Bloggery. We’ll
					help you find and follow blogs like that.
					</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInRight">
					<img height='260' src={image3} alt='due to some reasons image is not available'/>
				</ScrollAnimation>
			</div>
			<div className = 'middle2'>
				<ScrollAnimation animateIn="fadeInLeft">
					<img height='300' src={image2} alt='due to some reasons image is not available'/>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInRight" >
				<p className='firstBlock'>
					Turns out that when you make it
					easy to create interesting things, 
					that’s exactly what people do. All
					those great, random blogs your friends
					send you, those are Bloggery. We’ll
					help you find and follow blogs like that.
					</p>
				</ScrollAnimation>
			</div>
			<div className = 'middle3'>
				<ScrollAnimation animateIn="fadeInRight" >
				<p className='firstBlock'>
					Turns out that when you make it
					easy to create interesting things, 
					that’s exactly what people do. All
					those great, random blogs your friends
					send you, those are Bloggery. We’ll
					help you find and follow blogs like that.
					</p>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeInLeft">
					<img height='300' src={image1} alt='due to some reasons image is not available'/>
				</ScrollAnimation>
			</div>
			</div>
		)
	}
}

class Bottom extends React.Component{
	render(){
		return(
			<footer className='bottom'>
				<a href='https://github.com/Mehtavarun/Bloggery'>Github</a>
				<a href='https://github.com/Mehtavarun/Bloggery'>Linkedin</a>
				<h5>Full Stack MERN Project</h5>
			</footer>
		)
	}
}

const style={
	animationDelay:'1s',
	position:'fixed',
	left:'1270px',
	top:'595px'
};
const styleButton=[
	{  
		paddingLeft: '89px',
		paddingRight: '80px',
		height: '50px',
		marginLeft: '540px',
		marginTop: '0px',
		color: 'white',
		animationDelay: '1s',
	    fontFamily: 'cursive',
	    fontSize:'128%' },
	{
		height: '50px',
		marginLeft: '540px',
		marginTop: '10px',
		color: 'white',
		animationDelay: '1s',
		paddingLeft: '110px',
		paddingRight: '108px',
		fontFamily: 'cursive',
	    fontSize:'128%'}
];

Main.childContextTypes = {
            muiTheme: PropTypes.object.isRequired,
        };
