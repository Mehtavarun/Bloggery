import React from 'react';
import './css/dashboard.css';
import "animate.css/animate.min.css";
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TitleBar from './titleBar';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import Img from './images/s.jpg'
import { Card, CardActions, CardHeader, CardMedia } from 'material-ui/Card';
import img from './images/2.jpg'

export default class Dashboard extends React.Component{

	constructor(props){
		super();
		this.state = {
			pageYOffset:0,
			showTitleBar:true
		}
	}

	getChildContext() {
                return { muiTheme: getMuiTheme(baseTheme) };
            }

    componentDidMount(){
    	window.addEventListener('scroll',()=>{

    		if(this.state.pageYOffset < window.pageYOffset){
    			this.setState({
    				showTitleBar:false
    			})
    		} else{
    			this.setState({
    				showTitleBar:true
    			})
    		}

    		this.setState({
    			pageYOffset:window.pageYOffset
    		})
    	})
    }

	render(){
		return(

			<div id='dashboard'>

				{(this.state.showTitleBar)?
					<TitleBar 
					scrollVal={0}
					showSignIn={false}
					showSignUp={false}
					/>	:
					<TitleBar 
					scrollVal={Number.MAX_SAFE_INTEGER}
					showSignIn={false}
					showSignUp={false}
					/>
				}

				<div className='centerDash'>
					
					<Card style={{marginBottom:'20px'}}>

						<CardHeader
						  title="Name Avatar"
					      avatar="./images/1.jpg"
						/>

						<CardMedia>

							<img src={img} alt='could not loaded'/>

						</CardMedia>

						<CardActions>

							<FlatButton label='Like It'/>
							<FlatButton label='Share'/>

						</CardActions>

					</Card>
					<Card style={{marginBottom:'20px'}}>

						<CardHeader
						  title="Name Avatar"
					      avatar="./images/1.jpg"
						/>

						<CardMedia>

							<img src={img} alt='could not loaded'/>

						</CardMedia>

						<CardActions>

							<FlatButton label='Like It'/>
							<FlatButton label='Share'/>

						</CardActions>

					</Card>
					<Card style={{marginBottom:'20px'}}>

						<CardHeader
						  title="Name Avatar"
					      avatar="./images/1.jpg"
						/>

						<CardMedia>

							<img src={img} alt='could not loaded'/>

						</CardMedia>

						<CardActions>

							<FlatButton label='Like It'/>
							<FlatButton label='Share'/>

						</CardActions>

					</Card>
				</div>		
				
					<br/>	
			
			</div>
		)
	}
}

Dashboard.childContextTypes = {
            muiTheme: PropTypes.object.isRequired,
        };

