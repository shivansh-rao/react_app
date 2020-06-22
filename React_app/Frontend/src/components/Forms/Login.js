import React, { Component } from 'react'
import axios from 'axios'
// import App from '../App.js'
import {Redirect,Router,Route} from 'react-router-dom'
 class Login extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:'',
              password:'',
              Logged:false,
             }
     }
     add=(e)=>{
         this.setState({[e.target.name]:e.target.value})
     }
     login=(f)=>{
            f.preventDefault()
            
            this.props._login(this.state.username, this.state.password);
          
     }
    
        
    render() {
        if(this.props.logged)
        return <Redirect to="/"/>
        else
        return (
            <React.Fragment>
                <div className="container">
                    <div className="registrations__spacer"></div>
                    <div className="col-xs-6" id="f" >
                            <div className="text-center sheet--padding-bottom">
                             <h4 className="alpha text-weight--bold"><b>Login to YelpCamp</b></h4>
                             <p>Don't have any account? <a rel="nofollow" href="/register">Register</a></p>
                              </div>
            <div className="form">
                <form onSubmit={this.login}>
                    <input type="hidden" name="csrfmiddlewaretoken" value="lz3oVJ99t2ZRWjg9H5a5OfFV4b88Iqf3JMtnAe5ygLunzYfjsau78dWVpJceCe85"/>
                    <div className="row">
                      <div className="col-xs-6">
                        <div className="form-group">
                          <label>Username</label>
                              <input onChange={this.add} autoFocus="autofocus" className="form-control js-validate-field-on-blur" required="required"  type="text" name="username" />
              
                        </div>          
                      </div>                 

                      <div className="col-xs-6">
                        <div className="form-group">
                          <label >Password</label>
                              <input onChange={this.add} className="form-control" type="password" name="password"/>
              
                        </div>
                      </div>
            
                      
                       <div className="form-group text-center" id="s">
                          <button className="btn btn-md btn-primary" type="submit">
                              Login
                            </button>
                        </div>
                      
                  </div> 
                </form>
                        
            </div>
</div>
</div>
            </React.Fragment>
        )
    }
}

export default Login
