import React, { useEffect, useState, useMemo } from "react";
import userManagement from "../services/user-management";
import Card from "./Card";
import UserForm from "./UserForm";

const Cards = () => {
  //   const [email, setEmail] = useState("");
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [pwd, setPwd] = useState("");
  //   const [userName, setUserName] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const getAllUser = async () => {
    await userManagement
      .getAllUsers()
      .then((response) => {
        setAllUsers(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAllUser();
  }, []);

  useEffect(() => {
    setTimeout(function () {
      getAllUser();
    }, 3000);

    // getAllUser();
  }, [allUsers]);

  return allUsers.map((user) => {
    return (
      <Card
        key={Math.random()}
        firstName={user.fist_name || user.first_name}
        lastName={user.last_name}
        email={user.email}
      />
    );
  });
};

export default Cards;
