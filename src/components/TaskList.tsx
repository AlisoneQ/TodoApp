import { forwardRef, useImperativeHandle, useState } from "react";
import { type Task } from "../types/Task";
import TaskItem from "./Task";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onDeleteCompleted: (ids: number[]) => void;
}

export interface TaskListHandle {
  triggerDeleteCompleted: () => void;
}

const TaskList = forwardRef<TaskListHandle, TaskListProps>(function TaskList(
  { tasks, onToggleTask, onDeleteTask, onDeleteCompleted },
  ref,
) {
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

  const handleDeleteCompletedWithAnimation = () => {
    const completedIds = tasks
      .filter((t) => t.completed && !deletePhases[t.id])
      .map((t) => t.id);

    if (completedIds.length === 0) return;

    setDeletePhases((prev) => {
      const next = { ...prev };
      completedIds.forEach((id) => (next[id] = "flash"));
      return next;
    });

    setTimeout(() => {
      setDeletePhases((prev) => {
        const next = { ...prev };
        completedIds.forEach((id) => {
          if (next[id]) next[id] = "fade";
        });
        return next;
      });
    }, 120);

    setTimeout(() => {
      onDeleteCompleted(completedIds);
      setDeletePhases((prev) => {
        const next = { ...prev };
        completedIds.forEach((id) => delete next[id]);
        return next;
      });
    }, 650);
  };

  useImperativeHandle(ref, () => ({
    triggerDeleteCompleted: handleDeleteCompletedWithAnimation,
  }));

  return (
    <div className="h-full overflow-y-auto p-3">
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
});

export default TaskList;
