import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup.object().shape({
  name: yup.string().required("Name is Required").matches(/^[A-Za-z]+$/, 'Name should contain only alphabets'),
  address: yup.string().required("Address is Required"),
  state: yup.string().required("state is Required"),
  employeeCode: yup.string().required("Employeecode is Required"),
  joiningDate: yup.string().required("JoiningDate is Required"),
});

function EmployeeForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Add the employee data to an array of employees
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(data);
    localStorage.setItem('employees', JSON.stringify(employees));

    // Navigate to the next page
    navigate('/employees');
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" pattern="^[A-Za-z]+$" {...register("name")} />
            {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" name="address" {...register("address")} />
            {errors.address && <p style={{color:"red"}}>{errors.address.message}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="state" className="form-label">State</label>
            <input type="text" className="form-control" id="state" name="state" {...register("state")} />
            {errors.state && <p style={{color:"red"}}>{errors.state.message}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="employeeCode" className="form-label">Employee Code</label>
            <input type="text" className="form-control" id="employeeCode" name="employeeCode" {...register("employeeCode")} />
            {errors.employeeCode && <p style={{color:"red"}}>{errors.employeeCode.message}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="joiningDate" className="form-label">Joining Date</label>
            <input type="text" className="form-control" id="joiningDate" name="joiningDate" {...register("joiningDate")} />
            {errors.joiningDate && <p style={{color:"red"}}>{errors.joiningDate.message}</p>}
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;
