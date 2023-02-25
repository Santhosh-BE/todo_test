import React from 'react';
import { render, screen ,fireEvent} from '@testing-library/react';
import EmployeeTable from './EmployeeTable';
import { MemoryRouter } from 'react-router-dom';
describe('EmployeeTable', () => {
  const employeeData = [
    {
      email: 'jane.doe@example.com',
      name: 'santhosh',
      joiningDate: '2022-02-01',
      address: '456 Park Ave',
      state: 'NY',
      employeeCode: 'E002'
    },
  ];

  beforeEach(() => {
    localStorage.setItem('employees', JSON.stringify(employeeData));
  });

  afterEach(() => {
    localStorage.removeItem('employees');
  });

  it('renders employee table with correct column values', () => {
    render(<MemoryRouter><EmployeeTable /></MemoryRouter>);

    expect(screen.getByText('santhosh')).toBeInTheDocument();
    expect(screen.getByText('2022-02-01')).toBeInTheDocument();
    expect(screen.getByText('456 Park Ave')).toBeInTheDocument();
    expect(screen.getByText('NY')).toBeInTheDocument();
    expect(screen.getByText('E002')).toBeInTheDocument();
  });
  it('displays the employee table with data and opens the modal with the correct data when an employee name is clicked', async () => {
    // Set up the employee data to be used in the test
    const employeeData = [
      {
        email: 'john@example.com',
        name: 'John Smith',
        joiningDate: '2020-01-01',
        address: '123 Main St',
        state: 'CA',
        employeeCode: 'E123',
      },
      {
        email: 'jane@example.com',
        name: 'Jane Doe',
        joiningDate: '2020-02-01',
        address: '456 Elm St',
        state: 'NY',
        employeeCode: 'E456',
      },
    ];
    
    // Store the employee data in localStorage for the component to use
    localStorage.setItem('employees', JSON.stringify(employeeData));

    // Render the component with the employee data
    render(
      <MemoryRouter>
        <EmployeeTable />
      </MemoryRouter>
    );

    // Check that the employee table is displayed with the correct data
    const johnSmithName = screen.getByText(/john smith/i);
    const janeDoeName = screen.getByText(/jane doe/i);
    expect(johnSmithName).toBeInTheDocument();
    expect(janeDoeName).toBeInTheDocument();

    // Click on John Smith's name to open the modal
    fireEvent.click(johnSmithName);

    // Check that the modal is displayed with the correct data
    const modalTitle = await screen.findByText(/employee product details/i);
    expect(modalTitle).toBeInTheDocument();

    const modalId = screen.getByText(/id:/i);
    const modalDescription = screen.getByText(/description:/i);
    const modalPrice = screen.getByText(/price:/i);
    const modalDiscountPercentage = screen.getByText(/discountpercentage:/i);
    const modalBrand = screen.getByText(/brand:/i);
    const modalCategory = screen.getByText(/category:/i);

    expect(modalId).toHaveTextContent("id");
    expect(modalDescription).toHaveTextContent("description");
    expect(modalPrice).toHaveTextContent("price");
    expect(modalDiscountPercentage).toHaveTextContent("discountPercentage");
    expect(modalBrand).toHaveTextContent("brand");
    expect(modalCategory).toHaveTextContent("category");
  });
});