import { useState } from "react";
import { type Task } from "../types/Task";

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

function AddTask({ onAddTask }: AddTaskProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const taskText = input.trim();
    if (taskText) {
      const newTask: Task = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      onAddTask(newTask);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="w-full pl-3"
      />
      <button
        type="submit"
        className="w-1/5 shadow-2xl rounded-md ml-2 cursor-pointer hover:bg-gray-600 transition-colors duration-400 h-full p-1"
      >
        Add
      </button>
    </form>
  );
}

export default AddTask;
