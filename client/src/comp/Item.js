import React, { useState } from "react";
import Axios from "axios";
import {Button} from 'react-bootstrap';


const Item = ({name,price,id}) => {
  

  const renderItem = () =>{

    return(
      <div>
      <p>{name}</p>
     <p>{price}</p>
      </div>
      
    )
  }


  return(
    <div>
      {renderItem()}
  </div>
  )
}

export default Item;