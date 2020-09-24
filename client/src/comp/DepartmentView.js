import React, { useState, useEffect } from "react";
import axios from "axios";
import {Card,Button} from 'react-bootstrap';
import Item from './Item'


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




  function renderItems(){
    return department.items.map((i) =>{
    return(
        <Item
        key={i.id}
        {...i}
        departmentId={department.id}
        />
    )
    });
  }
  
  return(
  <Card border="primary">
  <Card.Title>{department.name}</Card.Title>
  <Card.Body>
    <Item />
    {renderItems}
    <Button>Create Item</Button>

    </Card.Body>
  </Card>
  )
};

export default DepartmentView;