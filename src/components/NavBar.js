import React from 'react'
import { useEffect } from "react"
import { Link } from "react-router-dom"

function NavBar(props) {
    useEffect(() => {
        if (props.value != null) {
          var element = document.getElementById(props.value)
          element.classList = "nav-link active"
          element.style.textDecoration="underline"
        }
      }, [props.value])
    return (
        <div>
             <nav
        className="navbar navbar-expand-lg sticky-top navbar-dark"
        style={{ backgroundColor: "steelblue" ,
        borderRadius: "12px!important"}}
      >
        <Link className="navbar-brand" to="/">SM System</Link>

    
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link className="nav-link" to="/" id="home">Home</Link>
            <Link className="nav-link" to="/getstudent" id="getStudent">Student Info</Link>
            <Link className="nav-link" to="/getmark" id="getMark">Aggregate Mark</Link>
            <Link className="nav-link" to="/getgrade" id="getGrade">Grade</Link>

            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CRED</Link>
              <div class="dropdown-menu">
                <Link className="dropdown-item" to="/addstudent" id="addStudent">Add </Link> 
                <div class="dropdown-divider"></div>     
                <Link className="dropdown-item" to="/deletestudent" id="removeStudent">Delete </Link>
                <div class="dropdown-divider"></div>
                <Link className="dropdown-item" to="/updatestudent" id="updateStudent">Update </Link>
              </div>
            </li>           
          </div>
        </div>
      </nav>
        </div>
    )
}

export default NavBar
