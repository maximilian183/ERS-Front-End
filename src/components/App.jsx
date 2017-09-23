import { Container, Sidebar, Segment, Button, Menu, Image, Icon, Header, Message } from 'semantic-ui-react';
import cookie from 'react-cookies';
import { connect } from 'react-redux';

@connect((store) => {
  return {
  }
})

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }


  render() {

    return (
      <div>
        This is the main view!
      </div>
    )
  }
}

window.App = App;