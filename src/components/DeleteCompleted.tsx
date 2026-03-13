function DeleteCompleted({
  onDeleteCompleted,
}: {
  onDeleteCompleted: () => void;
}) {
  return (
    <button
      className="relative rounded-md px-3 py-1 cursor-pointer text-md text-gray-400 hover:text-gray-200 transition-colors duration-400"
      onClick={() => onDeleteCompleted()}
    >
      Delete completed tasks
    </button>
  );
}

export default DeleteCompleted;
