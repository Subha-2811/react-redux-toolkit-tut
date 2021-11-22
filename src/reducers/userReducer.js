import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  name: "Subhajyoti",
  age: "23",
  status: "coder",
};

export const fetchName = createAsyncThunk("fetchName", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data[0].name;
});

const userReducer = createSlice({
  name: "person",
  initialState,
  reducers: {
    updateAge(state, action) {
      state.age = action.payload;
    },
    updateName(state, action) {
      state.name = action.payload;
    },
    updateStatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [fetchName.fulfilled]: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { updateAge, updateName, updateStatus } = userReducer.actions;
export default userReducer.reducer;

// export default createReducer(initialState, (builder) => {
//   builder.addCase("UPDATE_AGE", (state, action) => {
//     state.age = action.payload;
//   });
//   builder.addCase("UPDATE_NAME", (state, action) => {
//     state.name = action.payload;
//   });
//   builder.addCase(updateStatus, (state, action) => {
//     state.status = action.payload;
//   });
// });
