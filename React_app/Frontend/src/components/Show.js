import React, { Component } from 'react'
import axios from 'axios'
import Login from './Forms/Login'
import {Link,Redirect} from 'react-router-dom'
// import { authenticationService } from '@/_services';
class Show extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             post:[],
             authenticate:true
        }
    };

    componentDidMount(){
        console.log("khjgf")
        axios.get("http://localhost:3001/campgrounds")
        .then(response=>{
            if(response.data==="not authenticated")
            {
                this.setState({authenticate:false})
            }
            console.log(response.data)
                this.setState({post: response.data});
                // console.log(this.post);
            })
        .catch(error=>{
            console.log("error hai bhai")
            console.log(error)
        })
    }
    
    render() {
        const {post}=this.state
        if(!this.state.authenticated)
       { return( <Login path="/login"/>)}
        else
        {
        return (
<div>
    <div className="container">
	  <header className="jumbotron">
		<div className="container">
			<h1>
				Welcome to YelpCamp!
			</h1>
			<p>
				<a href='/campgrounds/new' className="btn btn-primary btn-large">Add your campground..</a>
			</p>
		</div>
	</header>
		<div className="row" >
			 { post.map((c)=>
				<div key={c._id} className="col-md-3 col-sm-6">
					<div className="thumbnail">
						<img src={c.image}/>
						
							<div className="caption">
								<h4>
									{c.name}
								</h4>
								
								<p>
									<a href={`/campgrounds/${c._id}`} className="btn btn-primary">More Info</a>
								</p>
							</div>
					</div>
				</div>
             )}
		</div>
    </div>
   </div>
            )
            }}
        }

export default Show
