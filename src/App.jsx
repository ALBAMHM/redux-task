import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './redux/todosSlice';

const App = () => {
  const [task, setTask] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  const handleRemoveTask = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => handleRemoveTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;