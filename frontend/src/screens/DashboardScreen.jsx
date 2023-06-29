import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Todo from '../components/Todo';

const DashboardScreen = () => {
  return (
    <Container>
      <h1 className='text-center mt-5'>Todo List</h1>
      <Todo />
    </Container>
  );
};

export default DashboardScreen;
