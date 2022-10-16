import React from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Sidebar() {
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        class="sidebar-brand d-flex align-items-center justify-content-center"
        to={'/'}
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">College Portal</div>
      </Link>

      <hr class="sidebar-divider my-0" />

      <li class="nav-item active">
        <Link class="nav-link" to={''}>
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr class="sidebar-divider" />

      <div class="sidebar-heading">Interface</div>

      <li class="nav-item">
        <Link
          class="nav-link collapsed"
          to={"/Staff"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-fw fa-cog"></i>
          <span>Staffs</span>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          class="nav-link collapsed"
          to={'/Students'}
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i class="fas fa-fw fa-wrench"></i>
          <span>Students</span>
          </Link>
          
        
      </li>

      <hr class="sidebar-divider" />
      
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  Students
  </button>
  <ul class="dropdown-menu">
    {/* <li><a class="dropdown-item" href="#">Students</a></li> */}
    <li><a class="dropdown-item" href="#">Mech</a></li>
    <li><a class="dropdown-item" href="#">Automobile</a></li>
    <li><a class="dropdown-item" href="#">ECE</a></li>
    <li><a class="dropdown-item" href="#">IT</a></li>
    <li><hr class="dropdown-divider"/></li>
    
  </ul>
</div>

    </ul>
  );
}

export default Sidebar;
