import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import styles from "./NavbarMain.module.css";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

const NavbarMain = () => {
  const [showServices, setShowServices] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [activeNav, setActiveNav] = useState([ true, false, false, false ]);
  const [expand, setExpand] = useState(false);

  const closeNav = () => {
    setExpand(false);
  }

  const showServicesDropdown = () => {
    setShowServices(true);
    setShowRegistration(false); // Close the Registration dropdown when opening Services
  };

  const hideServicesDropdown = () => {
    setShowServices(false);
  };

  const showRegistrationDropdown = () => {
    setShowRegistration(true);
    setShowServices(false); // Close the Services dropdown when opening Registration
  };

  const hideRegistrationDropdown = () => {
    setShowRegistration(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("NavbarMain") !== null) {
      let temp = JSON.parse(sessionStorage.getItem("NavbarMain"));
      setActiveNav([...temp]);
    }
  }, []);

  const handleActiveNav = (i) => {
    let temp = activeNav;
    temp = temp.map(() => false);
    temp[i] = true;
    setActiveNav([...temp]);
    sessionStorage.setItem("NavbarMain", JSON.stringify(temp));
  };

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white",
          boxShadow: "1px 1px 10px rgb(0 0 0 / 0.4)",
        }}
        variant="light"
        expand="lg"
        sticky="top"
        onToggle={() => { setExpand(prevState => !prevState) }}
        expanded={expand}
      >
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            <img src="/logo.png" alt="FarmUnity Logo" className={styles.logoImage} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: 'auto' }}>
              <NavLink
                to="/"
                className={`${styles.nav_text} nav-link ${activeNav[0] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => { handleActiveNav(0); closeNav() }}
              >
                Home
              </NavLink>

              <NavLink
                to="/aboutUs"
                className={`${styles.nav_text} nav-link ${activeNav[1] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => { handleActiveNav(1); closeNav() }}
              >
                About us
              </NavLink>

              <NavDropdown
                show={showServices}
                onMouseEnter={showServicesDropdown}
                onMouseLeave={hideServicesDropdown}
                className={`nav-link ${styles.drop}`}
                title={
                  <Link to="/services" style={{ textDecoration: 'none' }} className={styles.dropicon} onClick={() => { handleActiveNav(2); closeNav() }}>
                    <span className={`${styles.nav_text} my-auto ${activeNav[2] ? styles.active : ""}`}>
                      Services
                    </span>
                  </Link>
                }
                id="services-nav-dropdown"
              >
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/sMediaService" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}>Digital Cooperative Platform</NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}> Farm Supplies </NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}> Financial Support </NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}>Market Hub</NavLink></NavDropdown.Item>
              </NavDropdown>

              {/* Registration Dropdown */}
              <NavDropdown
                show={showRegistration}
                onMouseEnter={showRegistrationDropdown}
                onMouseLeave={hideRegistrationDropdown}
                className={`nav-link ${styles.drop}`}
                title={
                  <Link to="/#" style={{ textDecoration: 'none' }} className={styles.dropicon} onClick={() => { handleActiveNav(3); closeNav() }}>
                    <span className={`${styles.nav_text} my-auto ${activeNav[3] ? styles.active : ""}`}>
                      Registration
                    </span>
                  </Link>
                }
                id="registration-nav-dropdown"
              >
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/signUp" onClick={() => { handleActiveNav(3); closeNav() }} className={styles.dropdownText}>Sign Up</NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/login" onClick={() => { handleActiveNav(3); closeNav() }} className={styles.dropdownText}>Login</NavLink></NavDropdown.Item>
              </NavDropdown>

              <NavLink
                to="/contactUs"
                className={`${styles.nav_text} nav-link ${activeNav[4] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => { handleActiveNav(4); closeNav() }}
              >
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
