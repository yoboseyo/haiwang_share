import React, { Component } from 'react';
import {
	HashRouter as Router,
	Route
} from 'react-router-dom';
import Index from './page/index';
import KnowMore from './page/knowMore';

class Routes extends Component {
	render(){
		return(
			<Router basename="/">
				<div style={{height: '100%'}}>
					<Route path='/index.html' render={()=>{
							return (<Index />)
						}}
					/>
				<Route path='/learnmore.html' render={()=>{
							if (!window.mobileCheck()) {
								window.location.href = 'http://ss.highwong.com/download.html';
							}
							return (<KnowMore />)
						}}
					/>
				</div>
			</Router>
		)
	}
}
export default Routes;
