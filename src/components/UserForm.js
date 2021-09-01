import React, { useEffect, useState } from 'react'
import userManagement from '../services/user-management'

function UserForm() {


    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [pwd, setPwd] = useState('');
    const [userName, setUserName] = useState('');
  
  
    const addNewUser = () => {
      userManagement.addUser(email,firstName,lastName,pwd,userName)
        .then((response) => {
        console.log(response.data.shops);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    return (
        <div>
            
        </div>
    )
}

export default UserForm
