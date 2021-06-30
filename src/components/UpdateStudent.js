import React from 'react'
import axios from "axios"
import NavBar from "./NavBar"
import { useState } from 'react'


function UpdateStudent() {
    const [id, setid] = useState("")
    const [email, setemail] = useState("")
  
    const updateStudentDb = (e) => {
        e.preventDefault()
        axios
          .put("http://localhost:8080/StudentMaintenance/update", {
            userid: id,
            email: email,
          })
          .then((result) => {
            console.log(result)
            if (result.data.statusCode == 200) {
              alert(result.data.description)
            } else {
              alert("No data found")

            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    return (
        <div>
             <NavBar value="updateStudent"></NavBar>
      <div className="container">
        <h2 className="text-center" style={{ color: "steelblue" }}>
          Update Student
        </h2>
        <form onSubmit={updateStudentDb}>
          <div className="form-group">
            <label htmlFor="id">
              Student Id <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="id"
              required
              placeholder="Enter Student ID"
              value={id}
              min={0}
              onChange={(e) => setid(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              placeholder="Enter New Email ID"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-info btn-lg btn-block">
              Update
            </button>

        </form>
      </div>
        </div>
    )
}

export default UpdateStudent
