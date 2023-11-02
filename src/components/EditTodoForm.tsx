import { useState } from "react";

interface Task {
  task: {
    id: string;
    task: string;
  };
  editTodo: (task: string, id: string) => void;
  list: Array<any>;
}

const EditTodoForm: React.FC<Task> = ({ editTodo, task, list }) => {
  const [todo, setTodo] = useState(task.task);
  const [error, setError] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskExists = list.some((task) => task.task === todo);
    if (taskExists) {
      return setError("Todo already added.");
    }
    editTodo(todo, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Edit Task
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default EditTodoForm;
