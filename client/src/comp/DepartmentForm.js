import axios from "axios";
import React, { useState } from "react";
import {Form,Button} from 'react-bootstrap';

const DepartmentForm = ({history}) => {
  const [name, setName] = useState("");
  const [description,setDescription] = useState("");


function handleSubmit(e){
  debugger
  axios
  .post("/api/departments", {name,description})
  .then((res) => {
    history.push("/department");
  })
  .catch((err) => {
    alert("create department broken");
  });
}





  return (
  <Form onSubmit={handleSubmit}>
  <Form.Group controlId="formGroupName">
    <Form.Label>Department Name</Form.Label>
    <Form.Control required  placeholder="Name of Store" value={name} onChange={(e) => setName(e.target.value)} />
  </Form.Group>
  <Form.Group controlId="formGroupDescription">
    <Form.Label>Description</Form.Label>
    <Form.Control required  placeholder="Description"value={description} onChange={(e) => setDescription(e.target.value)}/>
  </Form.Group>
  <Button type="submit" variant="outline-primary">Submit</Button>
</Form>
  );
};

export default DepartmentForm;