import "./styles/App.css";
import { useRef, useState } from "react";
import AddTaskPopup from "./components/AddTaskPopup";
import TaskList, { type TaskListHandle } from "./components/TaskList";
import { type Task as TaskType } from "./types/Task";
import DeleteCompleted from "./components/DeleteCompleted";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const taskListRef = useRef<TaskListHandle>(null);

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

  const handleDeleteCompleted = (ids: number[]) => {
    setTasks((prev) => prev.filter((task) => !ids.includes(task.id)));
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex items-center justify-between gap-1 shrink-0 shadow-lg py-3 px-3">
        <h1 className=" text-4xl font-bold text-shadow-md">Todo App</h1>
        <AddTaskPopup onAddTask={handleAddTask} />
      </div>
      <div className="flex-1 min-h-0">
        <TaskList
          ref={taskListRef}
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
          onDeleteCompleted={handleDeleteCompleted}
        />
      </div>
      <DeleteCompleted
        onDeleteCompleted={() => taskListRef.current?.triggerDeleteCompleted()}
      />
    </div>
  );
}

export default App;
