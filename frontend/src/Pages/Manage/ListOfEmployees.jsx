import React,{useEffect,useState} from 'react'
import axios from 'axios'

export default function ListOfEmployees() {

  let [allEmployees,setAllEmployees] = useState([]);

  useEffect(()=>{
    async function getAllEmployees()
    {
      let res = await axios.get("http://localhost:5500/api/employee/list");
      setAllEmployees(res.data);
    }
    getAllEmployees();
  },[])

  return (
    <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Profile</th>
              <th>Role</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Edit Details</th>
              <th>Delete Data</th>
            </tr>
          </thead>

          <tbody>
            {
              allEmployees.map((emp)=>{
                return (
                  <tr key={emp._id}>
                    <td>{emp.EmployeeName}</td>
                    <td><img src={emp.EmployeePoster} alt="" /></td>
                    <td>{emp.EmployeeJobRole}</td>
                    <td>{emp.EmployeeDep}</td>
                    <td>{emp.EmployeeSalary}</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>
    </div>
  )
}
