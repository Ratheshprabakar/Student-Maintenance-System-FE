import React from 'react'
import { useState } from 'react'
import axios from "axios"
import NavBar from './NavBar';



function GetStudent() {

  const [id, setid] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [marks, setMarks] = useState("")
  const [grade, setGrade] = useState("")
  const [isSuccess, setisSuccess] = useState(false)

  const getStudentFromDB = (e) => {
    setIsLoading(true)
    e.preventDefault()
    axios
      .get(`http://localhost:8080/StudentMaintenance/search/${id}`)
      .then((result) => {
        console.log(result)
        if (result.data.statusCode == 200) {
          setEmail(result.data.studentInfoBean.email)
          setName(result.data.studentInfoBean.name)
          setMarks(result.data.studentInfoBean.marks)
          setGrade(result.data.studentInfoBean.grade)
          setisSuccess(true)
        } else {
          setisSuccess(false)
          document.getElementById("falseCondition").style.visibility = "visible"
        }
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        console.log(err)
      })
  }

    return (
        <div>
        <NavBar value="getStudent"></NavBar>
      <div className="container">
        <h2 className="text-center" style={{ color: "steelblue" }}>
Student Info      
</h2>
        <form onSubmit={getStudentFromDB}>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="id"
              min={0}
              required
              placeholder="Enter Student Id"
              value={id}
              onChange={(e) => setid(e.target.value)}
            />
          </div>
          {!isLoading ? (
            <button type="submit" className="btn btn-info btn-lg btn-block" >
              Fetch
            </button>
          ) : (
            <button
              className="btn btn-info btn-lg btn-block"
              type="button"
              disabled
            >
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Fetching
            </button>
          )}
        </form>
        {isSuccess ? (
          <form>
            <h4 className="text-center m-4" style={{color:"steelblue"}}>Student Info</h4>
            <div className="form-group">
              <label htmlFor="email">Email ID </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                readOnly
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="marks">Mark</label>
              <input
                type="number"
                className="form-control"
                id="marks"
                step="any"
                required
                readOnly
                placeholder="Mark"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                readOnly
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="grade">Grade</label>
              <input
                className="form-control"
                id="grade"
                value={grade}
                type="text"
                required
                readOnly
                onChange={(e) => {
                  setGrade(e.target.value)
                  console.log(e.target.value)
                }}
              ></input>
            </div>
          </form>
        ) : (
          <h4
            className="text-center text-danger p-3"
            id="falseCondition"
            style={{ visibility: "hidden" }}
          >
            OOPS, No Student Found with this {id}
           </h4>
        )}
      </div>
        </div>
    )
}

export default GetStudent
