import React from 'react'
import axios from 'axios'
import "./FormPage.css"

export default function FormPage() {

  async function handleSubmit(e) {
    e.preventDefault();
    let newEmp = {
        EmployeePoster: e.target[0].value,
        EmployeeName: e.target[1].value,
        EmployeeAge: e.target[2].value,
        EmployeeDep: e.target[3].value,
        EmployeeJobRole: e.target[4].value,
        EmployeeSalary: e.target[5].value
    }
    console.log(newEmp);
    let res = await axios.post("http://localhost:5500/api/employee/add",newEmp);
    console.log(res.data);
    
  }

  return (
    <div id = "FormPage">
        <center>
            <form onSubmit={handleSubmit} >
                <input type="url" placeholder='Employee Poster: ' />
                <input type="text" placeholder='Employee Name: ' />
                <input type="text" placeholder='Employee Age: ' />
                <input type="text" placeholder='Employee Dep: ' />
                <input type="text" placeholder='Employee JobRole: ' />
                <input type="number" placeholder='Employee Salary: ' />
                <button type="submit">Submit</button>
            </form>
        </center>
    </div>
  )
}
