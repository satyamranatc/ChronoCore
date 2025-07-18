import React from 'react'

export default function ListOfEmployees() {
  return (
    <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Edit Details</th>
              <th>Delete Data</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>John Doe</td>
              <td>0V4d0@example.com</td>
              <td>Manager</td>
              <td>HR</td>
              <td>$50,000</td>
              <td><button>Edit</button></td>
              <td><button>Delete</button></td>
            </tr>
          </tbody>

        </table>
    </div>
  )
}
