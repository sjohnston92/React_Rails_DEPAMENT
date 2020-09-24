import React, { useState, useEffect } from "react";
import axios from "axios";
import {Card,Button} from 'react-bootstrap';
import Item from './Item'


const DepartmentView = ({history,match}) => {
  const[department,setDepartment]=useState({});
  const[item,setItem]=useState([]);

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
    if (!department.items) {
      return; // breaks out of function
    }
    if (department.items.length === 0) {
      return <p>NO Items</p>;
    }
      return item.map((i) =>{
      return(
        <div>
        <Item
        key={i.id}
        {...i}
        departmentId={department.id}
        />
        <Button variant="outline-warning">Edit</Button>
        <Button variant="outline-danger">Delete</Button>
        </div>
      )
    });
  }
  
  return(
  <Card border="primary">
  <Card.Title>{department.name}</Card.Title>
  <Card.Body>
    <Item />
    {renderItems()}
    <br />
    <Button>Create Item</Button>

    </Card.Body>
  </Card>
  )
};

export default DepartmentView;