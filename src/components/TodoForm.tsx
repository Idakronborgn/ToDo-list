import React from 'react';
import {useState} from 'react';

interface TodoFormProps {
    addTodo: (todo: string) => void;
  }


const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        addTodo(value);
        setValue("");
    }
  return (
    <>
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='Hvad er planen for idag?' 
        onChange={(e) => setValue(e.target.value)}></input>
        <button type="submit" className='todo-btn'>Tilføj</button>
    </form>
    </>

  );
};

export default TodoForm;
