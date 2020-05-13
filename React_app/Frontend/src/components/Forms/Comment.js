import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export class Comment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             comm:'',
             done:false
        }
    }
    c=(e)=>{
        this.setState({comm:e.target.value})
    }

    addComment=(f)=>{
        f.preventDefault();
        const i=this.props.match.params.id;
        console.log(i);
        const add={comment:this.state.comm};
        axios.post("http://localhost:3001/campgrounds/"+i+"/comment",add)
        .then(response=>{
            this.setState({done:true});
            console.log(response) })
        .catch(error=>{
            console.log(error)
        })
    }
    
    render() {
        if(this.state.done)
        return (
            <Redirect to={`/campgrounds/${this.props.match.params.id}`}/>
        )
        else
        return (
            <React.Fragment>
                <div className="container">
	                <div className="row">
	                    <h1 >
	                            Add the Comment 
                                {/* to {campground.name} */}
                        </h1>

                    <div >
	                    <form  onSubmit={this.addComment}>
			                <div className="form-group">
					            <input onChange={this.c} className="form-control" type="text" name="comment[text]" placeholder="text" />
			                </div>
			
			                <div className="form-group">
					            <button type="submit" className="btn btn-primary btn-lg btn-block">
					                Submit!
					            </button>
			                </div>

                        </form>
										  
	                </div>
                    </div>
	            </div>
            </React.Fragment>
        )
    }
}

export default Comment
