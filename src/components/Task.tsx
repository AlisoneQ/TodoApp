import { type Task as TaskType } from "../types/Task";

interface TaskProps {
  task: TaskType;
  onToggle?: (id: number) => void;
  onDelete?: (id: number) => void;
  deletePhase?: "flash" | "fade";
  isFirst?: boolean;
  isLast?: boolean;
}

function Task({
  task,
  onToggle,
  onDelete,
  deletePhase,
  isFirst,
  isLast,
}: TaskProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => {
        if (!deletePhase) {
          onToggle?.(task.id);
        }
      }}
      className={`group flex items-center justify-between p-2 border-x border-b cursor-pointer duration-500 transition-[background-color,border-color,box-shadow,opacity,transform] ${
        isFirst ? "border-t rounded-t-md" : "border-t-0"
      } ${isLast ? "rounded-b-md" : "rounded-none"} ${
        deletePhase === "flash"
          ? "border-red-500 bg-red-500/35 shadow-[0_0_24px_rgba(239,68,68,0.55)]"
          : deletePhase === "fade"
            ? "border-red-500 bg-red-500/30 shadow-[0_0_24px_rgba(239,68,68,0.45)] opacity-0 scale-95"
            : task.completed
              ? "border-green-500 bg-green-500/20 shadow-[0_0_18px_rgba(34,197,94,0.35)]"
              : "border-gray-700 bg-transparent shadow-[0_0_18px_rgba(34,197,94,0)]"
      } hover:bg-gray-800`}
    >
      <div className="w-full text-left">
        <span
          className={`transition-colors duration-300 ${
            deletePhase
              ? "text-red-100"
              : task.completed
                ? "text-green-200"
                : ""
          }`}
        >
          {task.text}
        </span>
      </div>

      {onDelete && (
        <button
          type="button"
          aria-label="Delete task"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(task.id);
          }}
          disabled={!!deletePhase}
          className="ml-3 p-2 rounded-md cursor-pointer hover:bg-gray-600 transition-colors duration-400 opacity-0 group-hover:opacity-100"
        >
          <img src="/trashcan.svg" alt="" className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export default Task;
