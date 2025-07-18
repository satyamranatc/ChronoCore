import React from 'react'
import "./Manage.css"

import Popup from 'reactjs-popup';

import FormPage from './FormPage';
import ListOfEmployees from './ListOfEmployees.jsx';


export default function Manage() {
  return (
    <div>
      <section>
        <h1>Manage Page</h1>
        <p>
          This is the Manage page.
        </p>
      </section>
      <section>
        <Popup trigger={<button>Add Employees</button>} position={"right center"} >
          <FormPage />
        </Popup>
      </section>
      <section>
        <ListOfEmployees />
      </section>
    </div>
  )
}
