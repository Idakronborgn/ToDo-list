import React from 'react';


interface TodoProps {
  task: {
    id: string;
    task: string;
    completed: boolean;
  };
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
  
}

const Todo: React.FC<TodoProps> = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='todo'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>
          {task.task}
        </p>
        <div>
        <button className='delete'  type='submit' onClick={() => deleteTodo(task.id)}>Delete</button>
        <button className='update' type='submit' onClick={() => editTodo(task.id)}>Edit</button></div>

    </div>
  );
  
};

export default Todo;
