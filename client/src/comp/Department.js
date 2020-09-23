import React, {useState,useEffect} from 'react';
import {Container,Card} from 'react-bootstrap';
import axios from "axios";


const Department = () => {
  const [departments,setDepartments] = useState([
    {id:1, name:"Corky Things", description:"These are just fun"},
    {id:2, name:"Fancy Things", description:"Soo fancy"},
    {id:3, name:"Shiny Things", description:"well would you look at that"},
  ]);

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

      <div key={department.id}>
          <h4>{department.name}</h4>
          <p>{department.description}</p>
      </div>

    ));
    };

  return (
    <Container>
      <h1>Department</h1>
      <br />
      <h4>Where you wildest Dreams come true</h4>
      <br />
        <Card>{renderDepartments()}</Card>



    </Container>

  
  );
  }

export default Department;