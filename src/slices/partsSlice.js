import { createSlice } from '@reduxjs/toolkit';

//is this proper place for functions using toolkit?

//compose svg for a part using string interpolation for parameters (scale, rotation, etc)
function interpolateSvg(action) {
  return ``; 
}

//compose overall svg file for whole coloring page by looping through all parts in state and injecting their svg
function composePageSvg(state) {
  return ``;
}

const partsSlice = createSlice({
  name: 'parts',
  initialState: {
    parts: []
    //pageSvg: the combined svg file will go here as plaintext, so I can access it in my coloringpage component
  },
  reducers: {
    addPart(state, action) {
      state.parts.push({
        // properties of the part here, from action payload
        id: action.payload.id,

        // construct svg text string here using string interpolation?
        svg: interpolateSvg(action)
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