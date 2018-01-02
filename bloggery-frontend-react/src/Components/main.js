import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      pauseOnHover:false
    };

export default class Main extends React.Component{
	render(){
		return(<Slider {...settings}>
        <div><img src={require('./images/1.jpg')} /></div>
        <div><img src={require("./images/2.jpg")} /></div>
        <div><img src={require("./images/3.jpg")} /></div>
      </Slider>)
	}
}