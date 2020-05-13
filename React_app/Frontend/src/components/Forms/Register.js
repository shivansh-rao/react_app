import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

 class Register extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             email:'',
              username:'',
              password:'',
              ph:'',
              registered:false

         }
     }
     add=(e)=>{
         this.setState({[e.target.name]:e.target.value})
     }
     register=(f)=>{
            f.preventDefault()
            const user={
                username:this.state.username,
                email:this.state.email,
                password:this.state.password,
                ph:this.state.ph
            }
            axios.post("http://localhost:3001/register",user)
            .then(res=>{
               return this.setState({registered:true})
                // console.log("user posted")
            })
            .catch(err=>console.log(err))
     }
     
    render() {
        if(this.props.registered)
        return <Redirect to="/login"/>
        else
        return (
            <React.Fragment>
                <div className="container">
      <div className="registrations__spacer"> </div>
        
            <div className="col-xs-4" id="h">
                <div className="text-center">
                  <h4 className="alpha text-weight--bold">Join YelpCamp</h4>
                     <p>Already have an account? <a rel="nofollow" href="/login">Login</a></p>
                </div>
            </div>
    

   <div className="form" id="f">
    <form onSubmit={this.register}>
          <input type="hidden" name="csrfmiddlewaretoken" value="Ci4boAXJ9Md5sVnQvginZhm5eJz11lYKPI3QTwmwShJI7UxBAAkHXymqMNFVPe0"/>
        <div className="row" id="c">
         
<div className="col-xs-12">
        <div className="form-group">
          <label >
            Email address
</label>
          <input onChange={this.add} className="form-control js-validate-field-on-blur" required="required" type="email"  name="email" id="user_email" />
          
        </div> 
            </div>
<div className="col-xs-12">
        <div className="form-group">
          <label >
            Username <span className="text-secondary">(only letters, numbers, and underscores)</span>
</label>
          <input onChange={this.add} className="form-control js-validate-field-on-blur" pattern="[a-zA-Z0-9_]*[a-zA-Z][a-zA-Z0-9_]*" required="required" type="text" name="username" id="user_username" />
          
        </div> 
    </div>
            
    <div className="col-xs-12">
        <div className="form-group">
          <label >
            Password <span className="text-secondary">(min. 6 char)</span>
          </label>
          <input onChange={this.add} autoComplete="off" minLength="6" className="form-control js-validate-field-on-blur" required="required" type="password" name="password" id="user_password" />
          
        </div>
    </div>
	<div className="col-xs-12">
        <div className="form-group">
          <label >
            Phone Number
          </label>
          <input onChange={this.add} autoComplete="off" minLength="6" className="form-control js-validate-field-on-blur" required="required"  type="tel" name="ph" id="phone" />
          
        </div>
    </div>
			
            
    <div className="col-xs-6">
        <div className="form-group">
              <button className="btn btn-lg btn-primary" name="veg" type="submit">
                  SUBMIT
                </button>
        </div>
    </div>
            
        </div>
   </form>
        </div> 

    </div>

            </React.Fragment>
        )
    }
}

export default Register
