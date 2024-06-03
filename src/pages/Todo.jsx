const Todo = ({ todo, completed, onDelete, onUpdate }) => {
  return (
    <li className="group/item relative flex items-center justify-between p-4 hover:bg-slate-100">
      <p className="w-full text-sm leading-6 font-semibold text-slate-900 inset-0">
        {todo}
      </p>
      <p className="w-full text-slate-500">
        Completed: {completed ? "Yes" : "No"}
      </p>
      <button className="mr-5" onClick={onUpdate}>
        Edit
      </button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Todo;
