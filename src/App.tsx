import "./styles/App.css";
import { useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import { type Task as TaskType } from "./types/Task";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const handleAddTask = (task: TaskType) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleToggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div
      className="max-w-xl justify-self-center p-4 m-5 space-y-4 shadow-xl rounded-md"
      style={{ backgroundColor: "#181818" }}
    >
      <h1 className="text-3xl text-center">Todo App</h1>
      <AddTask onAddTask={handleAddTask} />
      <div className="space-y-2">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
