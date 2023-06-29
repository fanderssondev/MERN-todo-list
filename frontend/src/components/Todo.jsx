import React, { useState } from 'react';
import { Container, Form, Button, ListGroup, Modal } from 'react-bootstrap';

const Todo = () => {
  // const [todo, setTodo] = useState({
  //   id: '155',
  //   header: 'header!!!',
  //   text: 'text!!!!',
  //   completed: false,
  // });
  const [todos, setTodos] = useState([
    {
      id: '1',
      header: 'header!!!',
      text: 'text!!!!',
      completed: false,
    },
    {
      id: '2',
      header: 'header!!!',
      text: 'text!!!!',
      completed: false,
    },
    {
      id: '3',
      header: 'header!!!',
      text: 'text!!!!',
      completed: false,
    },
  ]);

  const handleEditClick = todoId => {};

  const handleDeleteClick = todoId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  const handleCompletedClick = todoId => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Container className='w-50'>
      <ListGroup>
        {todos.map((todo, index) => {
          return (
            <ListGroup.Item
              key={todo.id}
              className='my-4 p-2 border-1 border-black d-flex'
              style={{ background: todo.completed ? '#EEE' : 'inherit' }}
              action
              onClick={() => handleCompletedClick(todo.id)}
            >
              <div className='flex-grow-1'>
                <h3 className='mb-4 '>{todo.header}</h3>
                <p>{todo.text}</p>
              </div>
              <div
                className='d-flex flex-column gap-2'
                style={{ 'z-index': 100 }}
              >
                <Button variant='warning' onClick={handleEditClick}>
                  EDIT
                </Button>
                <Button
                  variant='danger'
                  style={{ 'z-index': 100 }}
                  onClick={handleDeleteClick}
                >
                  DELETE
                </Button>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default Todo;
