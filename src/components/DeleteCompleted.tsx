function DeleteCompleted({
  onDeleteCompleted,
}: {
  onDeleteCompleted: () => void;
}) {
  return (
    <button
      className="relative z-30 rounded-md px-3 py-1 cursor-pointer text-3xl"
      onClick={() => onDeleteCompleted()}
    >
      -
    </button>
  );
}

export default DeleteCompleted;
