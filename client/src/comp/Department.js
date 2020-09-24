import React, {useState,useEffect} from 'react';
import {Container,Card,Button, CardGroup} from 'react-bootstrap';
import axios from "axios";
import DepartmentForm from "./DepartmentForm";
import { Link, } from "react-router-dom";



const Department = () => {
  const [departments,setDepartments] = useState([]);

  useEffect(() => {
    // axios call 
    axios
      .get("/api/departments")
      .then((response) => {
       //update state
        setDepartments(response.data);
      })
      .catch((err) => {
        alert("Couldn't find departments");
      });
  }, []);

  const renderDepartments = () => {
    return departments.map((department) =>(
      <Card>
      <div key={department.id}>
          <Link to={`/departments/${department.id}`}><h4>{department.name}</h4></Link>
          <p>{department.description}</p>
          <br />
          <Button variant="outline-warning">Edit</Button>
          <Button variant="outline-danger">Delete</Button>
          <br />
      </div>
      </Card>

    ));
    };

  return (
    <Container>
      <h1>Department</h1>
      <br />
      <h4>Where you wildest Dreams come true</h4>
      <br />
      <DepartmentForm />
      <br />
       <CardGroup>{renderDepartments()}</CardGroup>



    </Container>

  
  );
  }

export default Department;