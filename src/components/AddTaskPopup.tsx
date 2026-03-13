import { useState } from "react";
import AddTask from "./AddTask";
import { type Task } from "../types/Task";

interface AddTaskPopupProps {
  onAddTask: (task: Task) => void;
}

function AddTaskPopup({ onAddTask }: AddTaskPopupProps) {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  const handleAddTaskAndClose = (task: Task) => {
    onAddTask(task);
    setIsAddTaskOpen(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-10 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isAddTaskOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsAddTaskOpen(false)}
      />

      <button
        className="z-30 rounded-md px-3 py-1 cursor-pointer text-1xl"
        onClick={() => setIsAddTaskOpen((prev) => !prev)}
      >
        Add Task
      </button>

      <div
        className={`fixed inset-0 z-20 flex items-center justify-center transition-all duration-300 ${
          isAddTaskOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <div className="w-80 origin-top-right rounded-md border bg-neutral-900 p-3 shadow-lg">
          <AddTask onAddTask={handleAddTaskAndClose} />
        </div>
      </div>
    </>
  );
}

export default AddTaskPopup;
