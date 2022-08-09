import React, { Component } from 'react';
class Contact extends Component {
    constructor(props) {
        super(props);
    }
    state = [show, setShow] = useState(false);
     handleClose = () => setShow(false);
     handleShow = () => setShow(true);
    deleteUser = (e) => {
        this.props.deleteUser(this.props.userData.id)
        e.preventDefault();
        this.setState(console.log('item deleted'))
    }

    render() {
        return (
            <>
              <Modal show={show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
          <EditUserForm userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose}/>
        </Modal.Body>
       
      </Modal>
                {this.props.userData.map((info) => {
                    return (
                        <div className='userdatah1' key={info.id}>
                            <h1 className='h1'>Details</h1>
                            <h1 >Name:{info.name}</h1>
                            <h1>phonenumber:{info.phonenumber}</h1>
                            <h1>Location:{info.location}</h1><br />
                            <button className="delete">Edit</button> 
                            <button onClick={this.deleteUser} className="delete">Delete</button>
                        </div>
                    )
                })}

            </>
        );
    }
}

export default Contact;