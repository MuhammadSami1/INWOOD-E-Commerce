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
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = state.cart.concat(action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) item.quantity = Math.max(item.quantity - 1, 1);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
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
export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } =
  userDetails.actions;
