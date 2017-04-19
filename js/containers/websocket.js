import React, {Component} from 'react';
import WS from '../components/websocket';

class WSContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <WS/>
    );
  }
}

export default WSContainer;