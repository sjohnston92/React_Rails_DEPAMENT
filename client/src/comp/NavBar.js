import React from 'react';
import { Nav } from 'react-bootstrap';


const NavBar =()=> (
<Nav className="justify-content-center" activeKey="/home">
<Nav.Item>
  <Nav.Link href="/">Home</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link href="/depo">Department Store</Nav.Link>
</Nav.Item>
</Nav>
)

export default NavBar;