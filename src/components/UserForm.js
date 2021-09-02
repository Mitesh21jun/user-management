import React, { useState } from 'react'
import userManagement from '../services/user-management'

const UserForm=()=> {


    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [pwd, setPwd] = useState('');
    const [userName, setUserName] = useState('');
  
  
  const addNewUser = (e) => {
      e.preventDefault()
      userManagement.addUser(email,firstName,lastName,pwd,userName)
        .then((response) => {
          console.log(response.data);
          alert(response.data.message)
          
        })
        .catch((e) => {
          console.log(e);
        });
    };

    return (
      <form action="" className='col-5 mt-5' onSubmit={addNewUser}>
      <h3>Add new user</h3>

      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter First Name"
          name="first-name"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
        <br />
        
        <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Last Name"
          name="last-name"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
        <br />

        <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Username"
          name="username"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <br />
        
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          id="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
        <br />
        
    
    
    
      <button type="submit" className="btn btn-primary btn-block">Submit  </button>
    
    </form>
    )
}

export default UserForm
