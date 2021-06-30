import React from 'react'
import axios from "axios"
import NavBar from "./NavBar"
import { useState } from 'react'

function AddStudent() {

        const [email, setEmail] = useState("")
        const [name, setName] = useState("")
        const [marks, setMarks] = useState("")
        const [grade, setGrade] = useState("")
            
        const addStudentToDb = (e) => {
          setIsLoading(true)
          e.preventDefault()
          axios
            .post("http://localhost:8080/StudentMaintenance/add", {
              email: email,
              marks: marks,
              name: name,
              grade: grade,
            })
            .then((result) => {
              console.log(result)
              alert(result.data.description)
            })
            .catch((err) => {
              alert(err.data.description)
              console.log(err)
            })
        }
    return (
        <div>
           <NavBar value="addStudent" />
      <div className="container">
        <h3 className="text-center" style={{ color: "steelblue" }}>
          Add Student
        </h3>
        <form onSubmit={addStudentToDb}>
        <div className="form-group">
            <label htmlFor="name">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              placeholder="Enter Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp"
            />
          </div>
         
          <div className="form-group">
            <label htmlFor="marks">
              Mark <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="marks"
              step="any"
              required
              placeholder="Enter your mark"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="grade">
              Grade <span className="text-danger">*</span>
            </label>
            <select
              className="form-control"
              id="grade"
              value={grade}
              required
              onChange={(e) => {
                setGrade(e.target.value)
                console.log(e.target.value)
              }}
            >
              <option value="" disabled selected hidden>
                Select Grade
              </option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">Fail</option>
            </select>
          </div>
          <button type="submit" className="btn btn-info btn-lg btn-block">
              Add
            </button>
        </form>
      </div> 
        </div>
    )
}

export default AddStudent
