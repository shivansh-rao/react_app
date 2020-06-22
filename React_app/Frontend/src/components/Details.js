import React, { Component } from 'react'
import axios from 'axios'
import Delete from './Delete'
import { Redirect } from 'react-router-dom'
import Update from './Forms/Update'

class Details extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
			 desc:{},
			 comment:[],
			 del:false
        }
    }
    componentDidMount(){
        const i=this.props.match.params.i
		axios.get("http://localhost:3001/campgrounds/"+i).
		then(response=>{
            
			this.setState({desc:response.data,comment:response.data.comment})
			console.log(this.state.comment)
        })
        .catch(error=>{
            console.log(error)
        })
        
    }

	
		delete=()=>{
            const j=this.props.match.params.i;
            axios.delete("http://localhost:3001/campgrounds/delete/",{params: {id: j}})
            .then(res=>{
                console.log(res)
                return this.setState({del:true})})
            .catch(err=>console.log(err))
		}
		
		
	
   render() {
	   if(this.state.del){
		  return <Redirect to="/campgrounds"/>
	   }
	   else{
		const {desc,comment}=this.state
		
        return (
            <React.Fragment>

  <div className="container">
	<div className="row">
		<div className="col-md-3">
			<p className="lead">
				YelpCamp
			</p>
			<div className="list-group">
				<li className="list-group-item" >Info 1</li>
				<li className="list-group-item">Info 2</li>
				<li className="list-group-item">Info 3</li>
			</div>
		</div>
		<div className="col-md-9">
			<div className="thumbnail">
				<img className="image-responsive" src={desc.image} />
				<div className="caption-full">
					<h4 className="pull-right">
						$10.00/night
					</h4>
					<h4>
						<a>{desc.name}</a>
					</h4>
					<p>
							{desc.description}
							
					</p>
					
					<p>
						<a href={`/campgrounds/edit/${desc._id}/${desc.name}/${desc.description}`} className="btn btn-primary">EDIT</a>
				    </p> 
					 
					 	<a onClick={this.delete} className="btn btn-primary btn-danger">
							DELETE
						</a>
					 
					
				</div>
			</div>
			<div className="well">
				<div className="text-right">
					<a className="btn btn-success" href={`/campgrounds/${desc._id}/comment/new`}>ADD COMMENT</a>
				</div>
				
				 {comment.map(comm=>
					<div key={comm._id} className="row">
					<div className="col-md-12">
						{/* {/* <strong>{comm.author.username}</strong>
						 <span className="pull-right">10 days ago</span> */}
						<p> 
							{comm.text}
						</p>
						
					</div>
				</div>
  				 )}
			 </div>
		</div>
	</div>
</div>
            </React.Fragment>
        )
    }}
}

export default Details
