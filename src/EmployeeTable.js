import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./EmployeeTable.css";
function EmployeeTable() {
  const [employeeData, setEmployeeData] = useState([]);
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees") || "[]");
    setEmployeeData(data);
  }, []);

  const handleOpenModal = (index) => {
    setSelectedEmployeeIndex(index);
    setShowModal(true);
    fetch(`https://dummyjson.com/products/${index}`)
      .then((response) => response.json())
      .then((data) => {
        setModalData(data);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Link to="/">Back to Form</Link>
      <h2>Employee Table</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Joining Date</th>
            <th>Address</th>
            <th>State</th>
            <th>Employee Code</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee, index) => (
            <tr key={employee.email}>
              <td onClick={() => handleOpenModal(index + 1)} data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter" style={{color:"#0d6efd",cursor:"pointer"}}>
                {employee.name}
              </td>
              <td>{employee.joiningDate}</td>
              <td>{employee.address}</td>
              <td>{employee.state}</td>
              <td>{employee.employeeCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
              Employee Product Details
              </h5>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <h4>{modalData.title}</h4>
          <p>id: {modalData.id}</p>
          <p>description: {modalData.description}</p>
          <p>price: {modalData.price}</p>
          <p>discountPercentage: {modalData.discountPercentage}</p>
          <p>brand: {modalData.brand}</p>
          <p>category: {modalData.category}</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeTable;
