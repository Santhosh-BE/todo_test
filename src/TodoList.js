// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table } from 'react-bootstrap';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const fetchTodos = async () => {
//       const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/todos'
//       );
//       setTodos(response.data);
//     };
//     fetchTodos();
//   }, []);

//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Title</th>
//           <th>Completed</th>
//         </tr>
//       </thead>
//       <tbody>
//         {todos.map((todo) => (
//           <tr key={todo.id}>
//             <td>{todo.id}</td>
//             <td>{todo.title}</td>
//             <td>{todo.completed ? 'Yes' : 'No'}</td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// export default TodoList;
