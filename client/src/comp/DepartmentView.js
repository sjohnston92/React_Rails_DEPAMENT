
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Card} from 'react-bootstrap';


const DepartmentView = ({history,match}) => {
  const[department,setDepartment]=useState({});

  useEffect(() => {
    axios.
    get(`/api/departments/${match.params.id}`)
    .then((res) => {
    setDepartment(res.data);
      })
    .catch((err) => {
     alert("Sorry, try again");
      });
  }, []);
  
  return(
  <Card>
  <Card.Title>{department.name}</Card.Title>
  <Card.Body>
    <h1>Hello</h1>
  </Card.Body>
  </Card>
  )
};

export default DepartmentView;