import React, { Component } from 'react';
import Contact from './Contact';
import ContactsForm from './ContactsForm';
import  './myStyles.css';


class App extends Component{
constructor(_props){
  super();
  this.state = {
    user:[
      {
        name: " Winifred",
        phonenumber: " 000 000 0000",
        location: " Abelenkpe",
    }
  ]
  }
}


AddNewUser = (user) =>{
  this.setState({
    user:[...this.state.user, user]
  })
}


render(){
  return(
  <div className='container'>
  <div className='form'>
  <ContactsForm details = {this.AddNewUser}/>
  </div>

  <div className='usersData'>
<Contact userData = {this.state.user}/>
</div>
  </div>
  )
}
}

export default App;

