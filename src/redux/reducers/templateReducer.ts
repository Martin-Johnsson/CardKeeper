import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  templateReducer: null,
};

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    templateReducer: (state, action: PayloadAction<null>) => {
      state.templateReducer = action.payload;
    },
  },
});

export const {} = templateSlice.actions;
export default templateSlice.reducer;
