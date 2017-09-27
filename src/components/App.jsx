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

        <button type="button" onClick={()=>{this.props.dispatch(SetCurrentDispatch('Fire Alarm in District 3', '435 Powell Street', ['SF1', 'SF4'], 'Powell AND Market', 435.23, 'E4', Date.now(), 'Current roadblocks on Market and 3rd'))}}>UPDATE DISPATCH</button>

        <br/>
        <DispatchDetails />
      </div>
    )
  }
}

window.App = App;
