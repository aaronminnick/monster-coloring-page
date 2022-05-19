import { createSlice } from '@reduxjs/toolkit';

//is this proper place for functions using toolkit?

//compose overall svg file for whole coloring page by looping through all parts in state and injecting their svg
function composePageSvg(state) {
  return ``;
}

const pageSlice = createSlice({
  name: 'page',
  initialState : { // how does this work when combining reducers?
    pageSvg: '' //the combined svg file will go here as plaintext, so I can access it in my coloringpage component
  }, 
  reducers: {
    compose(state, action) {
      composePageSvg(state); // should I just put the function here?
    }
  }
});

export const { compose } = pageSlice.actions;
export default pageSlice.reducer;