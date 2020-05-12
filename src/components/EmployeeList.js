import React from "react";
//import Table from "react-bootstrap/Table";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Table } from "../../node_modules/react-bootstrap";
import "../styles/EmployeeList.css"

function EmployeeTable(props) {
  return (
    <Table striped bordered hover small size="sm">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
          {
              props.data.map(row => (
                  <tr>
                      <td>{row.First_Name}</td>
                      <td>{row.Last_Name}</td>
                      <td>{row.Phone_number}</td>
                      <td>{row.Email}</td>
                      <td>{row.Department}</td>
                  </tr>
              ))
          }
          </tbody>
    </Table>
  );
}
export default EmployeeTable;
