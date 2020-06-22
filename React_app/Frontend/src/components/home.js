import React, { Component } from 'react'
import './styling/home.css'
export class home extends Component {
    render() {
        return (
    <div>
    <div id="landing-header">
 		<h1>Welcome to YelpCamp!</h1>
		<a href="/campgrounds" className="btn btn-lg btn-success">View All Campgrounds</a>
    </div>
    
    <ul className="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
            </div>
        )
    }
}

export default home


