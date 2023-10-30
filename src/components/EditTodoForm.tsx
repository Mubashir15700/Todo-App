import { useState } from "react";

interface Task {
  task: {
    id: string;
    task: string;
  };
  editTodo: (task: string, id: string) => void;
}

const EditTodoForm: React.FC<Task> = ({ editTodo, task }) => {
  const [todo, setTodo] = useState(task.task);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // prevent default action
    e.preventDefault();
    // edit todo
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
    </form>
  );
};

export default EditTodoForm;
