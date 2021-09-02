import React from 'react'
import { useEffect } from 'react';
import userManagement from '../services/user-management'

const Card = ({ email, firstName, lastName, pwd, userName }) =>
{



  const deleteUsers = () => {
    // const targetEmail = email;
      userManagement
      .deleteUser(email)
      .then((response) => {
        console.log(response.data);
        alert(response.data.message)
      })
      .catch((e) => {
        console.log(e);
      });
  };
  
  return (
    <div className="row">  
      <div className='card col-3'>
        <div className="card-body">
          <h5>{firstName} {lastName}</h5>
        </div>
      <button email={email} onClick={deleteUsers} className="btn btn-primary btn-block mb-3">Delete</button>
      </div>
      </div>
    )
}

export default Card
