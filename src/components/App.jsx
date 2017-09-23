import { connect } from 'react-redux';
import { SetCurrentDispatch } from '../actions/DispatchActions'


@connect((store) => {
  return {
    current_dispatch_description: store.dispatch.current_dispatch_description,
    current_dispatch_address: store.dispatch.current_dispatch_address,
    current_dispatch_apparatus_id_array: store.dispatch.current_dispatch_apparatus_id_array,
    current_dispatch_nearest_xstreets: store.dispatch.current_dispatch_nearest_xstreets,
    current_dispatch_radio_channel: store.dispatch.current_dispatch_radio_channel,
    current_dispatch_physical_map_ref: store.dispatch.current_dispatch_physical_map_ref,
    current_dispatch_time_stamp: store.dispatch.current_dispatch_time_stamp,
    current_dispatch_misc: store.dispatch.current_dispatch_misc,
  }
})

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }


  render() {

    const { current_dispatch_description, current_dispatch_address, current_dispatch_apparatus_id_array, current_dispatch_nearest_xstreets, current_dispatch_radio_channel, current_dispatch_physical_map_ref, current_dispatch_time_stamp, current_dispatch_misc } = this.props;

    return (
      <div>
        <button type="button" onClick={()=>{this.props.dispatch(SetCurrentDispatch('Fire Alarm in District 3', '435 Powell Street', ['SF1', 'SF4'], 'Powell AND Market', 435.23, 'E4', Date.now(), 'Current roadblocks on Market and 3rd'))}}>Update Dispatch</button>
        <br/>
        <ul>
          <li>{current_dispatch_description}</li>
          <li>{current_dispatch_address}</li>
          <li>{current_dispatch_apparatus_id_array}</li>
          <li>{current_dispatch_nearest_xstreets}</li>
          <li>{current_dispatch_radio_channel}</li>
          <li>{current_dispatch_physical_map_ref}</li>
          <li>{current_dispatch_time_stamp}</li>
          <li>{current_dispatch_misc}</li>
        </ul>
      </div>
    )
  }
}

window.App = App;