import "./Header.css"
import { Link } from "react-router-dom"
import {Navbar, Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap"
const Header = () => {

	return (
		<Navbar bg="dark" expand="lg">
  <Link className="logo" to="/">Media Library</Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <Link className="logo m-2 ml-4" to="/cart">Basket</Link>
      <Link className="logo m-2 ml-4" to="/login">Log In</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
	)
}

export default Header;