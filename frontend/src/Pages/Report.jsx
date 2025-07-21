import React,{useState,useEffect} from 'react'


import axios from 'axios'

export default function Report() {

  let [Data,setData] = useState([]);
  
  useEffect(()=>{

    async function GetData() 
    {
      let Res = await axios.get("http://localhost:5500/api/employee/list");
      setData(Res.data)
      
    }

    GetData()

  },[])

  return (
    <div>
      <main>
        <section>
          <h2></h2>
        </section>

        <section>
          {Data.map((item) => (
            <div key={item._id}>
              <h3>{item.EmployeeName}</h3>
              <p>Age: {item.EmployeeAge}</p>
              <p>Department: {item.EmployeeDep}</p>
              <p>Job Role: {item.EmployeeJobRole}</p>
              <p>Salary: {item.EmployeeSalary}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
