import { useEffect, useState } from "react";
import Todo from "./Todo";
import axios from "axios";
import { database } from "../../firebase";
import { ref, remove, update } from "firebase/database";

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

  const todoDeleteHandler = async (todoId) => {
    try {
      const response = await axios.delete(
        `https://app-login-firebase-ef638-default-rtdb.firebaseio.com/todos/${todoId}.json`
      );
      const todoRef = ref(database, `todos/${todoId}`);

      remove(todoRef)
        .then(() => {
          console.log("Todo delete successfully");
        })
        .catch((error) => {
          console.log("Todo delete Failed!", error);
        });

      console.log("Todo delete successfully", response);
    } catch (error) {
      console.log("Todo delete Failed!", error);
    }
  };

  const todoUpdateHandler = (todoId) => {
    const todoRef = ref(database, `todos/${todoId}`);

    const updateData = {
      id: 2,
      text: "Update Todo",
      completed: false,
    };

    update(todoRef, updateData)
      .then(() => {
        console.log("Todo update successfully");
      })
      .catch((error) => {
        console.log("Todo update Failed!", error);
      });
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
                    onUpdate={() => todoUpdateHandler(todoId)}
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
