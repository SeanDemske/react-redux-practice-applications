import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const TodoForm = () => {
    const [inputVal, setInputVal] = useState("");

    const dispatch = useDispatch();

    const handleChange = (e) => setInputVal(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            todo: {todoName: inputVal, id: uuidv4()}
        });
        setInputVal("");
    }

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <h1>Todo List</h1>
            <label htmlFor="todoInput">Create Todo</label>
            <input id="todoInput" name="todoInput" type="text" value={inputVal} onChange={handleChange} required/>
            
            <button>Submit</button>
        </form>
    );
}

export default TodoForm;