import React from 'react';
import { Nav,NavLink } from 'react-bootstrap';


const NavBar =()=> (
<Nav className="justify-content-center" activeKey="/home">
<Nav.Item>
  <Nav.Link href="/home">Home</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link href="/about">About</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link href="/whatever">Sample</Nav.Link>
</Nav.Item>
</Nav>
)

export default NavBar;