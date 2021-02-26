import React from "react";
import { useDispatch } from "react-redux";

const Todo = ({todoData}) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch({
            type: "REMOVE_TODO",
            id: todoData.id
        });
    }

    return (
        <li>{todoData.todoName} <button onClick={handleDelete}>X</button></li>
    );
} 

export default Todo;