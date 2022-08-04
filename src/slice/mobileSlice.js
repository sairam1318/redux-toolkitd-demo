import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobiles: [
    {
      name: "Iphone",
      price: "1200$"
    }
  ],
  loading: false
};

export const fetchMobiles = createAsyncThunk("mobile/addMobilesAsync", () => {
  console.log("trigggerd..");
  return [
    {
      name: "MI",
      price: "40$"
    },
    {
      name: "Oppo",
      price: "50$"
    }
  ];
});

// note: reducers are list of functions that can be used to manipulate state
const mobileSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    addMobile: (state, action) => {
      state.mobiles.push(action.payload);
    }
  },
  extraReducers: {
    [fetchMobiles.pending]: (state) => {
      state.loading = true;
    },
    [fetchMobiles.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.mobiles = [state.mobiles, ...action.payload];
    },
    [fetchMobiles.rejected]: (state) => {
      state.loading = false;
    }
  }
});

export const { addMobile } = mobileSlice.actions;
// here reducer nothing but slice
export default mobileSlice.reducer;
