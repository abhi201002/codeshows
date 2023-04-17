import React, { useEffect } from 'react'
import './navbar.css'

function Navbar(props) {
  // [login,setLogin] = useEffect(false)ui
  return (
    // <div className="nav">
    //     <div className="nav_left">
    //         <div className="nav_img">
    //             <img src="https://media.licdn.com/dms/image/C510BAQHFWz_x28P2wQ/company-logo_200_200/0/1573763330248?e=1689811200&v=beta&t=IcrqrAZDa06MQurO3DcmCVwhfiED2MXRRtxr0Invbt4" alt="jnjn" />
    //         </div>
    //         <div>Home</div>
    //         <div>Contact Us</div>
    //         <div>Contests</div>
    //     </div>
    //     <div className="nav_right">
    //         rightkjhkjhihio
    //     </div>
    // </div>
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light nav" >
      <a class="navbar-brand" href="#">
        <img src="https://media.licdn.com/dms/image/C510BAQHFWz_x28P2wQ/company-logo_200_200/0/1573763330248?e=1689811200&v=beta&t=IcrqrAZDa06MQurO3DcmCVwhfiED2MXRRtxr0Invbt4" width="30" height="30" alt=""/>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse font place" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item font" >
            <a class="nav-link" href="#" >Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" to = '/profile'>Profile</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Disabled</a>
          </li>
        </ul>
        {/* <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
        <ul class="navbar-nav ">
          <li class="nav-item font">
            <a class="nav-link" href="#" onClick={() => {props.update()}}>Login/Register </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar