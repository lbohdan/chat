import React, {Component} from 'react';
import ChatContainer from './containers/chat';
import LoaderContainer from './containers/loader';
import LoginContainer from './containers/login';
import WSContainer from './containers/websocket';


class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ChatContainer/>
        <LoaderContainer/>
        <LoginContainer/>
        <WSContainer/>
      </div>
    );
  }
}

export default Main;