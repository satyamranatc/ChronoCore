import React from 'react'
import "./FormPage.css"

export default function FormPage() {
  return (
    <div id = "FormPage">
        <center>
            <form>
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
