import "./styles/App.css";
import { useState } from "react";
import AddTaskPopup from "./components/AddTaskPopup";
import TaskList from "./components/TaskList";
import { type Task as TaskType } from "./types/Task";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const handleAddTask = (task: TaskType) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <>
      <div className="flex justify-end">
        <AddTaskPopup onAddTask={handleAddTask} />
      </div>
      <div className="flex items-center gap-0.5">
        <img
          src="/notepad.svg"
          alt="Notepad"
          className="h-8 w-8 inline-block ml-3"
        />
        <h1 className="m-3 text-3xl">Todo App</h1>
      </div>
      <div className="">
        <TaskList
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </>
  );
}

export default App;
