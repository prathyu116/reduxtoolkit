import React from "react";
import { useSelector } from "react-redux";

const CompletedTodoCount = () => {
  const todos = useSelector((state) => state.todos);
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div>
      <h2>Total Completed Todos: {completedCount}</h2>
    </div>
  );
};

export default CompletedTodoCount;
