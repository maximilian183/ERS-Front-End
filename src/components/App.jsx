import { connect } from 'react-redux';
import { SetCurrentDispatch } from './Dispatch/DispatchActions'
import axios from 'axios'

@connect((store) => { return {}})

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    //https://serene-basin-27195.herokuapp.com/api?code=1
    axios.get(`https://serene-basin-27195.herokuapp.com/api?code=1`)
    .then(function(response){
      console.log(response);

      const { assignment, crossstreets, description, district, id, map, radiofreq, streetname, streetnumber, timeout, misc } = response.data;

      this.props.dispatch(SetCurrentDispatch(assignment, crossstreets, description, district, id, map, radiofreq, streetname, streetnumber, timeout, misc));
    }.bind(this))
  }

  render() {

    return (
      <div>
        <br/>
        <DispatchDetails />
      </div>
    )
  }
}

window.App = App;