import { useEffect, useState } from "react";
import Todo from "./Todo";
import axios from "axios";
import { database } from "../../firebase";
import { ref, remove } from "firebase/database";

const TodoList = () => {
  const [todos, setTodos] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://app-login-firebase-ef638-default-rtdb.firebaseio.com/.json"
        );
        setTodos(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, []);

  const todoDeleteHandler = (todoId) => {
    const todoItem = Object.entries(todos).find(([id, todo]) => id === todoId);

    if (todoItem) {
      const [id, todo] = todoItem;
      const todoRef = ref(database, `todos/${id}`);

      remove(todoRef)
        .then(() => {
          console.log("Todo delete successfully");
        })
        .catch((error) => {
          console.log("Todo delete Failed!", error);
        });
    } else {
      console.log("Todo item not found with ID:", todoId);
    }
  };

  return (
    <div className="w-9/12 bg-white shadow h-full flex justify-center">
      {loading && (
        <h2 className="flex items-center justify-center">Loading...</h2>
      )}
      {error && <p>Error: {error}</p>}
      {todos && (
        <div className="w-8/12 py-5">
          <h1 className="p-4 text-2xl shadow-sm">Todos</h1>
          <ul className="mx-auto">
            {Object.keys(todos).map((todoId) => (
              <div key={todoId}>
                {Object.entries(todos[todoId]).map(([key, value]) => (
                  <Todo
                    key={key}
                    todo={value.text}
                    completed={value.completed}
                    onDelete={() => todoDeleteHandler(todoId)}
                  />
                ))}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoList;
