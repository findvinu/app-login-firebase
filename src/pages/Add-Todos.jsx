import { useState, useId } from "react";
import { Input, Button } from "../components/index";
import { database } from "../../firebase";
import { ref, push } from "firebase/database";

const AddTodos = () => {
  const [newTodo, setNewTodo] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const id = useId();

  const newTodoHandler = (e) => {
    e.preventDefault();
    const todoRef = ref(database, "todos");
    const todo = {
      id: id,
      text: newTodo,
      completed: isCompleted,
    };

    push(todoRef, todo);
    setNewTodo("");
  };
  console.log("isCompleted", isCompleted);
  return (
    <div className="addTodos">
      <div className="py-8">
        <div className="flex items-center justify-center w-full">
          <div
            className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
          >
            <h2 className="text-center text-2xl font-bold leading-tight">
              Add Todos
            </h2>
            <form onSubmit={newTodoHandler} className="mt-8">
              <div className="space-y-5">
                <Input
                  label="Todo: "
                  placeholder="Enter todo task"
                  type="text"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                />
                <div className="space-y-2">
                  <input
                    value={isCompleted}
                    type="checkbox"
                    checked={isCompleted}
                    onChange={(e) => setIsCompleted(e.target.checked)}
                    className={`rounded-lg bg-white text-block outline-none focus:bg-gray-50 duration-200 border border-gray-200`}
                  />
                  <label className="ml-5">Completed</label>
                </div>
                <Button type="submit">Add Todos</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodos;
