import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = JSON.parse(localStorage.getItem("auth")) || {
  status: false,
  data: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.status = true;
      state.data = action.payload.data;
      localStorage.setItem("auth", JSON.stringify(state));
      console.log("login");
    },

    logout(state) {
      state.status = false;
      state.data = null;
      localStorage.removeItem("auth");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
