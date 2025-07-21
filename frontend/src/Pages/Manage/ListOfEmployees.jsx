import React,{useEffect,useState} from 'react'
import axios from 'axios'

export default function ListOfEmployees() {

  
  
  let [allEmployees,setAllEmployees] = useState([]);
  let [updated,setupdated] = useState(true);
  
  async function updateEmp(emp)
  {

    let Data = {
      EmployeePoster:prompt("Type The New Profile",emp.EmployeePoster),
      EmployeeName:prompt("Type The New Name",emp.EmployeeName),
      EmployeeAge:prompt("Type The New Age",emp.EmployeeAge),
      EmployeeDep:prompt("Type The New Department",emp.EmployeeDep),
      EmployeeJobRole:prompt("Type The New Job Role",emp.EmployeeJobRole),
      EmployeeSalary:prompt("Type The New Salary",emp.EmployeeSalary)
    }

    let Res = await axios.put(`http://localhost:5500/api/employee/update/${emp._id}`,Data);
    console.log(Res.data);
    setupdated(!updateEmp)

  }

  async function  deleteEmp(emp) {
    let Res = await axios.delete(`http://localhost:5500/api/employee/delete/${emp._id}`);
    console.log(Res.data);
       setupdated(!updateEmp)
    
  }



  useEffect(()=>{
    async function getAllEmployees()
    {
      let res = await axios.get("http://localhost:5500/api/employee/list");
      setAllEmployees(res.data);
    }
    getAllEmployees();
  },[updated])

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
                    <td><button onClick={()=>updateEmp(emp)} >Edit</button></td>
                    <td><button onClick={()=>deleteEmp(emp)} >Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>
    </div>
  )
}
