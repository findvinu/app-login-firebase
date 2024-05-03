import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AuthLayout from "./components/AuthLayout";
import AllTodos from "./pages/All-Todos";
import AddTodos from "./pages/Add-Todos";

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthLayout authentication={false}>
            <Home />
          </AuthLayout>
        }
      />
      <Route
        path="/login"
        element={
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        }
      />
      <Route
        path="/all-todos"
        element={
          <AuthLayout authentication>
            <AllTodos />
          </AuthLayout>
        }
      />
      <Route
        path="add-todos"
        element={
          <AuthLayout authentication>
            <AddTodos />
          </AuthLayout>
        }
      />
    </Routes>
  );
};

export default Routing;
