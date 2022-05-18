import React from 'react';
import { connect } from 'react-redux';

class Part extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  
  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

Part = connect()(Part);

export default Part;