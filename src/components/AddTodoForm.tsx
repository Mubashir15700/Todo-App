import { useState } from "react";

interface AddTodoFormProps {
  addTodo: (todo: string) => void;
  list: Array<any>;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo, list }) => {
  const [todo, setTodo] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (list.length) {
      const taskExists = list.some((task) => task.task === todo);
      if (taskExists) {
        return setError("Todo already added.");
      }
    }
    if (todo.length) {
      setError("");
      addTodo(todo);
    }
    setTodo("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
      {error !== "" && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default AddTodoForm;
