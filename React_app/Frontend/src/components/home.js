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

// import React, { Component } from 'react'
// import axios from'axios'

//  class home extends Component {
//      constructor(props) {
//          super(props)
     
//          this.state = {
//               username:'',
//               password:''
//          }
//      }
//      userAdd=(e)=>{
//         this.setState({[e.target.name]:e.target.value});
//         console.log(this.name);
//      }
//      add=(f)=>{
//         f.preventDefault();
//          const n={username:this.state.username,
//         password:this.state.password};
//          console.log(n);
//         axios.post("http://localhost:9000/add",n)
//         .then(res=>console.log("added"))
//         .catch(err=>console.log(err));
//      }
     
//     render() {
//         return (
//             <form onSubmit={this.add}>
//                 <label>Username</label>
//                 <input type="text" name="username" onChange={this.userAdd}></input>
//                 <input type="text" name="password" onChange={this.userAdd}></input>t
//                 <button type="submit"></button>
//             </form>
//         )
//     }
// }

// export default home
