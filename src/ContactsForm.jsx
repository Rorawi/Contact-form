import React, { Component } from 'react';

class ContactsForm extends Component {
    constructor(props){
        super();
        this.state = {
            name: "",
            phonenumber: "",
            location: "",
        }
    }

    handleName = (event)=>{
        event.preventDefault();
       this.setState({
        name:event.target.value,
       })
    
    }

    handlePhoneNumber = (event)=>{
        event.preventDefault();
       this.setState({
        phonenumber:event.target.value,
       })
    
    }

    handleLocation = (event)=>{
        event.preventDefault();
       this.setState({
        location:event.target.value,
       })
    
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.details(this.state);
        this.setState({
            name: '',
            phonenumber: '',
            location: '',
        })
     
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                <h1 className='title'>Contact Form</h1>

                    <label htmlFor="Name">Name:</label>
                    <input type="text"
                     value={this.state.name}
                     placeholder="Enter your name"
                     onChange={this.handleName} /><br/>

<label htmlFor="Name">Phonenumber:</label>
                    <input type="text"
                     value={this.state.phonenumber}
                     placeholder="Enter your phonenumber"
                     onChange={this.handlePhoneNumber} /><br/>

<label htmlFor="Name">Location:</label>
                    <input type="text"
                     value={this.state.location}
                     placeholder="Enter your location"
                     onChange={this.handleLocation} /><br/>


                     <button onSubmit={this.handleSubmit}>SUBMIT</button>
                </form>
            </div>
        );
    }
}

export default ContactsForm;
