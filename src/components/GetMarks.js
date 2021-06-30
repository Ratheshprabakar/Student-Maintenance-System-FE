import React from 'react'
import {useState} from 'react'
import axios from "axios"
import NavBar from './NavBar';

function GetMarks() {

    const [id, setid] = useState("")
    
    const getMarkFromDB= (e) => {
        e.preventDefault()
        axios
          .get(`http://localhost:8080/StudentMaintenance/getMark/${id}`)
          .then((result) => {
            console.log(result)
            if (result.data.statusCode == 200) {
              alert("The Mark for "+ result.data.studentInfoBean.name+ ` is ` + result.data.studentInfoBean.marks)
            } else {
              alert(`No such record found with ${id}`)
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    return (
        <div>
             <NavBar value="getMark"></NavBar>
      <div className="container">
        <h2 className="text-center" style={{ color: "steelblue" }}>
          Aggregate Mark
        </h2>
        <form onSubmit={getMarkFromDB}>
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
              placeholder="Enter Student ID"
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

export default GetMarks
