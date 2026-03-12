import { type Task as TaskType } from "../types/Task";

interface TaskProps {
  task: TaskType;
  onToggle?: (id: number) => void;
  onDelete?: (id: number) => void;
}

function Task({ task, onToggle, onDelete }: TaskProps) {
  return (
    <div className="flex items-center justify-between p-3 border border-gray-700 rounded-md">
      <label className="flex items-center gap-3 w-full cursor-pointer">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle?.(task.id)}
        />
        <span className={task.completed ? "line-through text-gray-500" : ""}>
          {task.text}
        </span>
      </label>

      {onDelete && (
        <button
          type="button"
          onClick={() => onDelete(task.id)}
          className="ml-3 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-600 transition-colors duration-400"
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default Task;
