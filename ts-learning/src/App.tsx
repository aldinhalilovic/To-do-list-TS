import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (toDo) {
      setTodos([...toDos, { id: Date.now(), todo: toDo, isDone: false }]);
      setToDo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        todo={toDo}
        setTodo={setToDo}
        handleAdd={(e) => handleAdd(e)}
      />
      <TodoList todos={toDos} setTodos={setTodos} />
    </div>
  );
};

export default App;
