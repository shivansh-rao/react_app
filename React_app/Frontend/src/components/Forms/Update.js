import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class Update extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                        name:this.props.match.params.name,
                        img:'',
                        desc:this.props.match.params.description,
                        added:false 
      }
    }
    edit=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    update=(f)=>{
        f.preventDefault();
        const n={
                       name:this.state.name,
                     image:this.state.img,
                    description:this.state.desc
                };
         console.log(n);
         const i=this.props.match.params.id
        axios.put("http://localhost:3001/campgrounds/update/"+i,n)
        .then(res=>{console.log("added");
        return this.setState({added:true})})
        .catch(err=>console.log(err));
    }
    componentDidMount=()=>{
        console.log(this.props.match.params.id)
        // cons.props.match.parsole.log(thiams.name)
    }
    
    render() {
        const {name,img,desc,added}=this.state
        if(added)
        return(
            <Redirect to='/campgrounds'/>
        )
        else
              return (
            <React.Fragment>
                <div className="container">
	                <div className="row">
	                    <h1 >
	                        Edit  {this.props.match.params.name}
                        </h1>
		
		            <div >
	                    <form  onSubmit={this.update}>
			                    <div className="form-group">
					                <input  onChange={this.edit} className="form-control" type="text" name="name" value={name}/>
			                    </div>
		                        <div className="form-group">
					                <input  onChange={this.edit} className="form-control" type="text" name="img"/>
			                    </div>
		                        <div className="form-group">
					                <input  onChange={this.edit} className="form-control" type="text" name="desc" value={desc}/>
			                    </div>
			
			                    <div className="form-group">
					                <button className="btn btn-primary btn-lg btn-block">
					                    UPDATE!
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

export default Update
