import React,{Component} from 'react';
import './App.css';
import Home from './components/home'
import Nav from './components/Nav'
import Show from './components/Show'
import Details from './components/Details'
import New from './components/Forms/New'
import Comment from './components/Forms/Comment'
import Update from './components/Forms/Update'
import Login from './components/Forms/Login'
import Register from './components/Forms/Register'
import Logout from './components/Logout'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
              loggedIn: false,
			          user: null
    }
  }
componentDidMount=()=>{
  axios.get('http://localhost:3001/user')
  .then(res=>{
    if(!!res.data.user)
    {
    this.setState({
      loggedIn:true,
      user:res.data.user
    })}
    else{
      this.setState({
      loggedIn:false,
      user:res.data.user
    })
    }
  })
  .catch(err=>console.log(err))
}

_login=(username,password)=>{
  // event.preventDefault();
  axios.post("http://localhost:3001/login",{username,password})
            .then(response=>{
                if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
        }
        else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
    })
            
}

_logout=()=>{
  axios.get("http://localhost:3001/logout")
        .then(response=>{
          console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
      }
    })}

  render()
  {
    return (
    <Router>
    <div className="App">
      <Nav user={this.state.user} _logout={this._logout}/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/campgrounds" exact render={() => <Show user={this.state.user} />}/>
      <Route exact path="/campgrounds/new"  render={() => <New loggedIn={this.state.loggedIn} />}/>
      <Route path="/campgrounds/:i" exact render={() => <Details user={this.state.user} />}/>
      <Route path="/campgrounds/edit/:id/:name/:description" exact render={() => <Update user={this.state.user} />}/>
      <Route path="/campgrounds/:id/comment/new" exact render={() => <Comment user={this.state.user} />}/>
      <Route path="/login" exact render={() => <Login logged={this.state.loggedIn} _login={this._login} />}/>
      <Route path="/register" exact component={Register}/>
      {/* <Route path="/logout" exact component={Logout}/> */}
      </Switch>
    </div>
    </Router>
  );
}
}

export default App;
