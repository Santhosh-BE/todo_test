import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './EmployeeTable.css';
function EmployeeTable() {
  const [employeeData, setEmployeeData] = useState([]);
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('employees') || '[]');
    setEmployeeData(data);
  }, []);

  const handleOpenModal = (index) => {
    setSelectedEmployeeIndex(index);
    setShowModal(true);
    fetch(`https://dummyjson.com/products/${index}`)
      .then(response => response.json())
      .then(data => {
        setModalData(data);
      })
      .catch(error => console.error(error));
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
        <Link to="/">Back to Form</Link>
      <h2>Employee Table</h2>
      <table className='employee-table'>
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
              <td onClick={() => handleOpenModal(index+1)}>{employee.name}</td>              
              <td>{employee.joiningDate}</td>
              <td>{employee.address}</td>
              <td>{employee.state}</td>
              <td>{employee.employeeCode}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{modalData.title}</h4>
          <p>id: {modalData.id}</p>
          <p>description: {modalData.description}</p>
          <p>price: {modalData.price}</p>
          <p>discountPercentage: {modalData.discountPercentage}</p>
          <p>brand: {modalData.brand}</p>
          <p>category: {modalData.category}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EmployeeTable;
