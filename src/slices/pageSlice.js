import { createSlice } from '@reduxjs/toolkit';

//is this proper place for functions using toolkit?

//compose overall svg file for whole coloring page by looping through all parts in state and injecting their svg
function composePageSvg(state) {
  return ``;
}

const pageSlice = createSlice({
  name: 'page',
  initialState : {}, // how does this work when combining reducers?
  reducers : {
    compose(state, action) {
      composePageSvg(state); // ????
    }
  }
});

export const { compose } = pageSlice.actions;
export default pageSlice.reducer;