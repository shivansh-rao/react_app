import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
export class New extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             image:'',
             description:'',
             added:false
        }
    }
    userAdd=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        console.log(this.name);
     }
     add=(f)=>{
        f.preventDefault();
         const n={
                       name:this.state.name,
                     image:this.state.image,
                    description:this.state.description
                };
         console.log(n);
        axios.post("http://localhost:3001/campgrounds/new",n)
        .then(res=>{
        return this.setState({added:true})})
        .catch(err=>console.log(err));
}
    
    render() 
    {
        
        if(this.state.added){
            return <Redirect to='/campgrounds'/>
        }
        else{
        return (
            <React.Fragment>
                <div className="container">
	                    <div className="row">
	                        <h1 >
	                            Add the CampGround
                            </h1>

                        <div >
	                    <form onSubmit={this.add}>
			                <div className="form-group">
					            <input  className="form-control" type="text" name="name" placeholder="name" onChange={this.userAdd}/>
			                </div>
			                <div className="form-group">
					            <input onChange={this.userAdd} className="form-control" type="text" name="image" placeholder="image url"/>
			                </div>
		                    <div className="form-group">
					            <input onChange={this.userAdd} className="form-control" type="text" name="description" placeholder="description"/>
			                </div>
			                <div className="form-group">
					            <button type="Submit" className="btn btn-primary btn-lg btn-block">
					                Submit!
					        </button>
			                </div>
                          </form>
										  
	                    </div>
                </div>
	    </div>
            </React.Fragment>
        )
    
}}}

export default New
