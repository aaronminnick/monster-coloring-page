import { createSlice } from '@reduxjs/toolkit';

const partsSlice = createSlice({
  name: 'parts',
  initialState: [],
  reducers: {
    addPart(state, action) {
      state.push({
        id: action.payload.id,
        svg: action.payload.svg
        // properties of the part here, from action payload
      });
    },
    rotatePart(state, action) {
      //rotate part
    },
    scalePart(state, action) {
      //scale part
    }
  }
});

export const { addPart, rotatePart, scalePart } = partsSlice.actions;
export default partsSlice.reducer;