import React, { Component } from 'react';

class Contact extends Component {
    constructor(_props) {
        super();
    }
    render() { 
        return ( 
            <>
            {this.props.userData.map((info,index)=>{
              return(
                <div className='userdatah1'>
                    <h1 className='h1'>Details</h1>
                <h1 key={index}>Name:{info.name}</h1>
                <h1 key={index}>phonenumber:{info.phonenumber}</h1>
                <h1 key={index}>Location:{info.location}</h1>
                </div>
              )
            })}
            
                </>
         );
    }
}
 
export default Contact;