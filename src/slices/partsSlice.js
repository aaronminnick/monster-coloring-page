import { createSlice } from '@reduxjs/toolkit';

//is this proper place for function using toolkit?
function composeSvg(action) {
  return ``; //compose svg here using string interpolation
}

const partsSlice = createSlice({
  name: 'parts',
  initialState: [],
  reducers: {
    addPart(state, action) {
      state.push({
        // properties of the part here, from action payload
        id: action.payload.id,

        // construct svg text string here using string interpolation?
        svg: composeSvg(action)
      });
    },
    rotatePart(state, action) {
      //rotate part
      //do I use filter by ID to find correct part in state?
    },
    scalePart(state, action) {
      //scale part
    }
  }
});

export const { addPart, rotatePart, scalePart } = partsSlice.actions;
export default partsSlice.reducer;