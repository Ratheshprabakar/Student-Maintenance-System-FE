import React from "react"
import { useState } from "react"
import axios from "axios"
import NavBar from './NavBar';


function DeleteStudent() {

  const [id, setid] = useState("")


  const removeStudentFromDb = (e) => {
    e.preventDefault()
    axios
      .delete(`http://localhost:8080/StudentMaintenance/remove/${id}`)
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
      <NavBar value="removeStudent"></NavBar>
      <div className="container">
        <h2 className="text-center" style={{ color: "steelblue" }}>
          Remove Student
        </h2>
        <form onSubmit={removeStudentFromDb}>
          <div className="form-group">
            <label htmlFor="id">
              Student Id <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="id"
              required
              placeholder="Enter Student Id"
              value={id}
              min={0}
              onChange={(e) => setid(e.target.value)}
            />

          </div>
          <button type="submit" className="btn btn-info btn-lg btn-block">
              Remove
            </button>
        </form>
      </div>
        </div>
    )
}

export default DeleteStudent


