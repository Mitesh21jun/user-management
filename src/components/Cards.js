import React, { useEffect, useState } from 'react'
import userManagement from '../services/user-management';
import Card from './Card';

function Cards() {

    
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [pwd, setPwd] = useState('');
    const [userName, setUserName] = useState('');
    const [allUsers, setAllUsers] = useState([]);
    
    const getAllUsers = () => {
        userManagement.getAllUsers()
          .then((response) => {
              setAllUsers(response.data)
              console.log(allUsers)

          })
          .catch((e) => {
            console.log(e);
          });
    };

    useEffect(() => {
        getAllUsers()
    }, [allUsers])
    
    
    return (
        allUsers.map(user => {
            return (<Card firstName={user.fist_name||user.first_name} lastName={user.last_name}/>)
        })
    )
}

export default Cards
