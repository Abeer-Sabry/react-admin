import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAdminsData = createAsyncThunk("admins/fetchAdminsData", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/users");
    // console.log("res", data);
    return data;
  } catch (error) {
    console.log("err", error);
  }
});

const adminSlice = createSlice({
  name: "admins",
  initialState: { loading: false, admins: [], error: null },
  extraReducers: {
    [fetchAdminsData.pending]: state => {
      state.loading = true;
    },
    [fetchAdminsData.fulfilled]: (state, action) => {
      state.admins = action.payload;
    },
    [fetchAdminsData.rejected]: (state, action) => {},
  },
});
export default adminSlice.reducer;
