import React from 'react'
import {useState} from 'react'
import axios from "axios"
import NavBar from './NavBar';

function GetGrade() {
    
  const [id, setid] = useState("")

  const getGradeFromDB= (e) => {
    e.preventDefault()
    axios
      .get(`http://localhost:8080/StudentMaintenance/getGrade/${id}`)
      .then((result) => {
        console.log(result)
        if (result.data.statusCode == 200) {
          alert("The Grade is "+result.data.studentInfoBean.grade)
        } else {
          alert("No Such record found")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
    return (
        <div>
            <NavBar value="getGrade"></NavBar>
      <div className="container">
        <h2 className="text-center" style={{ color: "steelblue" }}>
          Grade
        </h2>
        <form onSubmit={getGradeFromDB}>
          <div className="form-group">
            <label htmlFor="id">
              Student Id <span className="text-danger">*</span>
            </label>
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
          <button type="submit" className="btn btn-info btn-lg btn-block">
              Fetch
            </button>
        </form>
      </div>
        </div>
    )
}

export default GetGrade
