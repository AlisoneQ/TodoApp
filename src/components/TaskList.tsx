import { useState } from "react";
import { type Task } from "../types/Task";
import TaskItem from "./Task";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  const [deletePhases, setDeletePhases] = useState<
    Record<number, "flash" | "fade">
  >({});

  const handleDeleteWithAnimation = (id: number) => {
    if (deletePhases[id]) {
      return;
    }

    setDeletePhases((prev) => ({ ...prev, [id]: "flash" }));

    setTimeout(() => {
      setDeletePhases((prev) => {
        if (!prev[id]) {
          return prev;
        }
        return { ...prev, [id]: "fade" };
      });
    }, 120);

    setTimeout(() => {
      onDeleteTask(id);
      setDeletePhases((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    }, 650);
  };

  return (
    <div className="p-3">
      {tasks.length === 0 && <p>No tasks yet</p>}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={handleDeleteWithAnimation}
          deletePhase={deletePhases[task.id]}
          isFirst={task.id === tasks[0]?.id}
          isLast={task.id === tasks[tasks.length - 1]?.id}
        />
      ))}
    </div>
  );
}

export default TaskList;
