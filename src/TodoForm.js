// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

// const TodoForm = ({ addTodo }) => {
//   const [title, setTitle] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title) {
//       return;
//     }
//     addTodo({
//       title,
//       completed: false,
//     });
//     setTitle('');
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="formBasicTitle">
//         <Form.Label>Title</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </Form.Group>
//           <Button variant="primary" type="submit">
//         Add
//       </Button>
//     </Form>
//   );
// };

// export default TodoForm;
