import React, { Component } from 'react';
import Contact  from './components/Contact';
import ContactsForm from './components/ContactsForm';
import  './components/myStyles.css';


class App extends Component{
constructor(props){
  super(props);
  this.state = {
    user:[
      {
        name: " Winifred",
        phonenumber: " 000 000 0000",
        location: " Abelenkpe",
        id:"sjdhcxzvs"
    },
    {
      name: " Orison",
      phonenumber: " 000 000 0000",
      location: " Ashaley-Botwe",
      id: "sdadchsss"
  }
  ]
  }
}


AddNewUser = (user) =>{
  user.id = Math.random().toString();  
  this.setState({
    user:[...this.state.user, user]
  })
}

deleteUser = (id) => {
  let undeletedUser = this.state.user.filter(user => user.id !== id);
  this.setState({
    user:undeletedUser
  })
}

editUser = (id, updatedUser) => {
  this.setState({
    user: this.state.user.map(user => user.id === id ? updatedUser : user)
  })
}


render(){
  return(
  <div className='container'>
  <div className='form'>
  <ContactsForm className="dataflex" details = {this.AddNewUser}/>
  </div>

  <div className='usersData'>
<Contact userData = {this.state.user} deleteUser= {this.deleteUser} editUser={this.editUser}/>
</div>
  </div>
  )
}
}

export default App;

