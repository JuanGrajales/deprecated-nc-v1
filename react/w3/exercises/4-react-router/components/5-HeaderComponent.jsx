import React, { Component } from "react";
// step 1 EDIT
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
// step 1 EDIT
// step 2 ADD
import { NavLink } from "react-router-dom";
// step 2 ADD

class Header extends Component {
  // step 3 ADD
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  // step 3 ADD

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>NuCamp</h1>
                <h2>a better way to camp</h2>
              </div>
            </div>
          </div>
        </Jumbotron>
        {/* // step 4 EDIT */}
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="/assets/images/logo.png"
                height="30"
                width="30"
                alt="NuCamp Logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/directory">
                    <i className="fa fa-list fa-lg" /> Directory
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-info fa-lg" /> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i className="fa fa-address-card fa-lg" /> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        {/* // step 4 EDIT */}
      </React.Fragment>
    );
  }
}

export default Header;
