
import React, { useState } from 'react';


interface EditTodoProps {
  editTodo: (todo: string, id: string) => void;
  task: {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
  };
}

/* The code is defining a functional component called `EditTodo` that takes in two props: `editTodo`
and `task`. */
const EditTodo: React.FC<EditTodoProps> = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    editTodo(value, task.id);
    setValue("");
  };

  return (
    <>
      <form className='EditTodo' onSubmit={handleSubmit}>
        <input
          type="text"
          className='todo-input'
          value={value}
          placeholder='Updater din todo'
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit" className='todo-btn'>
          Opdater
        </button>
      </form>
    </>
  );
};

export default EditTodo;
