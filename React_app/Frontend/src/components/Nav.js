import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

 const Nav=(props)=>{
	 console.log(props.user)
		if(props.user)
        return (
            <React.Fragment>
                <nav className="nav navbar-default">
				<div className="container-fluid">
				<div className="navbar-header">
					<Link to='/'>Yelp</Link>
					</div>
					<div className="collapse navbar-collapse">
						<ul className=" nav navbar-nav navbar-right">
							 {/* <li></li> */}
							 <li><Link to="#">Logged In as {props.user.username}</Link></li>
							<li ><Link to="#" onClick={props._logout}>LogOut</Link></li>
						</ul>
					</div>
				</div>
			</nav>
            </React.Fragment>
            
		)

		else
		{
			return(
			<React.Fragment>
                <nav className="nav navbar-default">
				<div className="container-fluid">
				<div className="navbar-header">
					<Link to='/'>Yelp</Link>
					</div>
					<div className="collapse navbar-collapse">
						<ul className=" nav navbar-nav navbar-right">
							<li><Link to="/login">Log In</Link></li>
							<li><Link to="/register">Sign Up</Link></li>
							{/* <li><Link to="/logout">LogOut</Link></li> */}
						</ul>
					</div>
				</div>
			</nav>
			</React.Fragment>
			)
		}
    }


export default Nav
