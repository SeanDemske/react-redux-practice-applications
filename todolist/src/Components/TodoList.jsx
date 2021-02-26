import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
    const todos = useSelector(store => store.todos);

    return (
        <ul>
            {todos ? todos.map(todo => <Todo todoData={todo} key={todo.id} />) : ""}
        </ul>
    );
}

export default TodoList;