import React from 'react'
import NavBar from './NavBar';

function Welcome() {
    return (
      <div>         
          <NavBar value="home"></NavBar>
          <div className="card-body" style={{backgroundColor:"lightblue"}}>
            <div class="card text-center">
            <h2 className="card-title" style={{textAlign:"center"}}>Welcome to Student Management System</h2>
            <img src="https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/2021-04/homepage_hero_min_2.jpg?itok=WC0ura6s"/>
            </div>    
          </div>
      </div>

    )
}

export default Welcome
