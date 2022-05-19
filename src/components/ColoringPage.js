import React from 'react';
import Part from './Part.js'


// iterate through all levels of parts tree in state, build an array of part components

function ColoringPage() {
  return (
    <div className="coloring-page">
      {/* do a map of all the exposed parts 
        need to think about when react forces a refresh*/}
      <Part onClick="someFunctionToPopUpEditMenu" />
    </div>
  );
}

export default ColoringPage;