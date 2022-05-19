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
        rotation: 0, //better to grab default values from action, or metadata of svg templates?
        scale: 1.0,
        translateX: 0,
        translateY: 0,
        template: null, //this should point to svg template file
      });
      // interpolate svg here or do I need do it on a subsequent call?
      let part = state.parts.find(p => p.id == action.payload.id);
      part.svg = interpolateSvg(part);
    },
    rotatePart(state, action) {
      let part = state.parts.find(p => p.id == action.payload.id);
      part.rotation = action.payload.rotation;
      // part.svg = interpolateSvg(part);
    },
    scalePart(state, action) {
      let part = state.parts.find(p => p.id == action.payload.id);
      part.scale = action.payload.scale;
      // part.svg = interpolateSvg(part);
    },
    translatePart(state, action) {
      let part = state.parts.find(p => p.id == action.payload.id);
      //these may be better manipluated by simple ++ / -- on parameter
      part.translateX = action.payload.translateX; 
      part.translateY = action.payload.translateY;
      // part.svg = interpolateSvg(part);
    }
  }
});

export const { addPart, rotatePart, scalePart } = partsSlice.actions;
export default partsSlice.reducer;