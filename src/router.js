import React, { Component } from 'react';
import {
	HashRouter as Router,
	Route,
	Redirect
} from 'react-router-dom';
import Index from './page/index';
import KnowMore from './page/knowMore';

class Routes extends Component {
	render(){
		return(
			<Router basename="/">
				<div style={{height: '100%'}}>
					<Route exact path='/index.html/:id' render={(match)=>{
							return (<Index id={match.match.params.id} />);
						}}
					/>
					<Route exact path='/learnmore' render={()=>{
						if (!window.mobileCheck()) {
							window.location.href = 'http://ss.highwong.com/download.html';
						}
						return (<KnowMore />);
						}}
					/>
				</div>
			</Router>
		)
	}
}
export default Routes;
