import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
class Logout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedOut:false
        }
    }
    
    componentDidMount=()=>{
        
    }
    render() {
        if(this.state.loggedOut)
        return <Redirect to="/login"/>
        else
        return (<div>
            {/* {this.logout()} */}
        </div>
        )
    }
}

export default Logout
