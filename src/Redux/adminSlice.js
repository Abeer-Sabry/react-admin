import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAdminsData = createAsyncThunk("admins/fetchAdminsData", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/users");

    console.log("res", data);
  } catch (error) {
    console.log("err", error);
  }
});

const adminSlice = createSlice({
  name: "admins",
  initialState: { loading: false, admins: [], error: null },
});
export default adminSlice.reducer;
