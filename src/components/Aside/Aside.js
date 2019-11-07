import React from "react";
import data from './../Data';
import headshot from '../../assets/images/headshot.jpg';
import './Aside.css';

const tabs = Object.keys(data)
const headshotStyle = {
	height: "150px",
	borderRadius: "50%",
	border: "5px solid #ff8080"
}

class Aside extends React.Component {

	render() {
		return(
		  <div className="aside">
		  	<div className="asideImage">
		  		<img src={headshot} alt="headshot" style={headshotStyle}/>
		  	</div>
		  	<div className="asideTabs">
		 			{tabs.map((tab) => {
		 				return <div className="asideTab">{tab}</div>
		 			})}
		 		</div>
		  </div>
	  )
	}
};

export default Aside;