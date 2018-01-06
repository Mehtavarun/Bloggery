import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import "animate.css/animate.min.css";
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';
import {deepPurple50} from 'material-ui/styles/colors';

const style={
	marginTop: '200px',
	marginLeft: '650px',
	scrollBehavior: 'smooth',
	animationDelay:'2s'
}

export default class Main extends React.Component{

	getChildContext() {
                return { muiTheme: getMuiTheme(baseTheme) };
            }

    handleScroll(){
    	window.scrollBy(0,100);
    }

	render(){
		return(
			<div className = "wrapper">
				<div className = "top animated fadeInDown"  ref={node => this.node = node}>
				 	<h2 className="animated bounce">start blog today.</h2>
				 	<button id = "getStartedButton" className=" animated fadeInLeft">Get Started</button><br/>
				 	<button id = "signInButton" className=" animated fadeInRight">Sign In</button><br/>
				 	<IconButton className="animated infinite bounce" style={style} onClick={this.handleScroll.bind(this)}><ArrowUpward color={deepPurple50} /></IconButton>
				</div>
				<div className = 'middle animated fadeInUp'>
					<p>sdfnsajd</p><hr/><p>pkldflkan</p>
				</div>
			</div>
      )
	}
}

Main.childContextTypes = {
            muiTheme: PropTypes.object.isRequired,
        };
