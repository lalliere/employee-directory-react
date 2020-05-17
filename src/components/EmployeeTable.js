import React from "react";
//import Table from "react-bootstrap/Table";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import "../styles/EmployeeTable.css";

function EmployeeTable(props) {
  return (
    <Table striped bordered hover small size="sm">
      <thead>
        <tr>
          <th>
            <button onClick={() => props.sortBy("First_Name")}>
              First Name
            </button>
          </th>
          <th>
            <button onClick={() => props.sortBy("Last_Name")}>
              Last Name
            </button>
          </th>
          <th>
            <button onClick={() => props.sortBy("Phone_number")}>
              Phone Number
            </button>
          </th>
          <th>
            <button onClick={() => props.sortBy("Email")}> 
            Email
            </button>
          </th>
          <th>
            <button onClick={() => props.sortBy("Department")}>
              Department
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((row) => (
          <tr key={row.Email}>
            <td>{row.First_Name}</td>
            <td>{row.Last_Name}</td>
            <td>{row.Phone_number}</td>
            <td>{row.Email}</td>
            <td>{row.Department}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default EmployeeTable;
