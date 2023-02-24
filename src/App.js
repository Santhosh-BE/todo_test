import { useState } from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';
import EmployeeTable from './EmployeeTable';
function App() {
  return (
    <div className="Container-fluid">
      <Router>
        <Routes>
          <Route path='/' element={<EmployeeForm/>} />
          <Route path='employees' element={<EmployeeTable />} />          
        </Routes>
      </Router>
      </div>
  )
}
export default App;