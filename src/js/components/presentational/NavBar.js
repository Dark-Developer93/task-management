import React from 'react';

import NavItem from './NavItem';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarContent"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarContent">
      <ul className="navbar-nav mr-auto">
        <NavItem path="/task" label="Task" />
        <NavItem path="/report" label="Report" />
      </ul>
    </div>
  </nav>
);

export default NavBar;
