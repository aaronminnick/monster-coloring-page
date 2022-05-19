import { createSlice } from '@reduxjs/toolkit';

//is this proper place for functions using toolkit?

//compose svg for a part using string interpolation for parameters (scale, rotation, etc)

//can I add something to state and then immediately modify it? Or does that take a subsequent call to the reducer?
function interpolateSvg(part) {
  let template = part.template;
  Object.keys(part).filter(k => k != 'template') // need better filter
    .forEach((k) => {
      template = template.replace(`{{${k}}}`, `${part[k]}`);
    });
  return template; 
}

const partsSlice = createSlice({
  name: 'parts',
  initialState: { //how does this work when combining reducers
    parts: []
  },
  reducers: {
    addPart(state, action) {
      state.parts.push({
        id: action.payload.id,
        rotation: 0, //better to grab these values from action, or metadata of svg templates?
        scale: 1.0,
        translateX: 0,
        translateY: 0,
        template: null, //this should point to svg template file
        // construct svg text string here using string interpolation or do I need do it on a subsequent call?
        svg: interpolateSvg(action)
      });
    },
    rotatePart(state, action) {
      //rotate part
      //do I use filter by ID to find correct part in state?
    },
    scalePart(state, action) {
      //scale part
    },
    translatePart(state, action) {
      //translate part
    }
  }
});

export const { addPart, rotatePart, scalePart } = partsSlice.actions;
export default partsSlice.reducer;