import { render ,fireEvent,waitFor} from '@testing-library/react';
import EmployeeForm from './EmployeeForm';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('EmployeeForm', () => {
  test('renders form with name, address, state, employee code, joining date fields and submit button', () => {
    const { getByLabelText, getByRole } = render(<MemoryRouter><EmployeeForm /></MemoryRouter>);
    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('Address')).toBeInTheDocument();
    expect(getByLabelText('State')).toBeInTheDocument();
    expect(getByLabelText('Employee Code')).toBeInTheDocument();
    expect(getByLabelText('Joining Date')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
    test('displays error message when name field is empty', async () => {
      const { getByLabelText, getByRole, findByText } = render(<MemoryRouter><EmployeeForm /></MemoryRouter>);      
    const nameInput = getByLabelText('Name');
    const submitButton = getByRole('button', { name: /submit/i });
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.click(submitButton);
    const errorMessage = await findByText(/name is required/i);
    expect(errorMessage).toBeInTheDocument();
  });
  it('should allow only alphabetic characters in name input', async () => {
    const { getByLabelText, getByRole, findByText } = render(<MemoryRouter><EmployeeForm /></MemoryRouter>);      
  const nameInput = getByLabelText('Name');
  const submitButton = getByRole('button', { name: /submit/i });
  fireEvent.change(nameInput, { target: { value: 'Joe123' } });
  fireEvent.click(submitButton);
  const errorMessage = await findByText(/Name should contain only alphabets/i);
  expect(errorMessage).toBeInTheDocument();
  });
});




