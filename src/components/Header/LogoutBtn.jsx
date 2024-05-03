import React from "react";
import { auth } from "../../../firebase";
import { logout } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function LogoutBtn() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    try {
      dispatch(logout(null));
      navigation("/login");
      console.log("logout successfully");
    } catch (error) {
      console.log("Logout Failed", error);
    }
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
