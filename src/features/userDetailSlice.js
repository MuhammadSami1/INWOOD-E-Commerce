import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "https://6697887e02f3150fb66e001e.mockapi.io/INWOOD";

export const showUsers = createAsyncThunk(
  "showUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch(URL);

    try {
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userDetails = createSlice({
  name: "UserDetail",
  initialState: {
    loading: false,
    users: [],
    error: null,
  },
  //   For showUsers
  extraReducers: (builder) => {
    builder
      .addCase(createAction(showUsers.pending), (state) => {
        state.loading = true;
      })
      .addCase(createAction(showUsers.fulfilled), (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(createAction(showUsers.rejected), (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
  },
});

export default userDetails.reducer;
