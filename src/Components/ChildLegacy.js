import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class ChildLegacy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('render childLegacy')
    return (
      <div>
      <Button inverted color='orange' onClick={this.props.clickHandler}>Increment counter</Button>
      </div>
    );
  }
}

export default ChildLegacy;
