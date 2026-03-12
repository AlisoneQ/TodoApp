import { type Task } from "../types/Task";

interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <>
      <ul>
        {tasks.length === 0 && <p>No tasks yet</p>}
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
