import React, { useContext, useState } from "react";
import Store from "../context";

export default function TodoForm() {
  const { dispatch } = useContext(Store);

  const [todo, setTodo] = useState("");

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleTodoAdd() {
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  }

  return (
    <div className="div1">
      <h1><u>To Do List _App</u></h1>
      <form>
      <input value={todo} className="input_aj" autoFocus={true} placeholder="Ajouter un tâches" onChange={handleTodoChange} />

      <button onClick={handleTodoAdd} className="buttAjo">Ajouter </button>
      </form>
    </div>
  );
}
