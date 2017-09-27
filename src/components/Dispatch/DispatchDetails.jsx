import { connect } from 'react-redux';
import { SetCurrentDispatch } from './DispatchActions'

@connect((store) => {
  return {
    current_dispatch_apparatus_id_array: store.dispatch.current_dispatch_apparatus_id_array,
    current_dispatch_crossstreets: store.dispatch.current_dispatch_crossstreets,
    current_dispatch_description: store.dispatch.current_dispatch_description,
    current_dispatch_district: store.dispatch.current_dispatch_district,
    current_dispatch_id: store.dispatch.current_dispatch_id,
    current_dispatch_physical_map_ref: store.dispatch.current_dispatch_physical_map_ref,
    current_dispatch_radiofreq: store.dispatch.current_dispatch_radiofreq,
    current_dispatch_address: store.dispatch.current_dispatch_address,
    current_dispatch_time_stamp: store.dispatch.current_dispatch_time_stamp,
    current_dispatch_misc: store.dispatch.current_dispatch_misc,
  }
})


class DispatchDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    // firebase.database.ref('/dispatches').then(function(snapshot){
    //   snapshot.forEach(function(disp){
    // this.props.dispatch(SetCurrentDispatch(disp.val()));
    //   }.bind(this))
    // }.bind(this))
  }

  render(){

    const { current_dispatch_description, current_dispatch_address, current_dispatch_apparatus_id_array, current_dispatch_crossstreets, current_dispatch_radiofreq, current_dispatch_physical_map_ref, current_dispatch_time_stamp, current_dispatch_misc, current_dispatch_district, current_dispatch_id } = this.props;

    return (
      <div>
        <ul>
<<<<<<< 676bcef4e650b70e42e85e4ea6a41a657e05cff3
          <li>{current_dispatch_apparatus_id_array}</li>
          <li>{current_dispatch_crossstreets}</li>
          <li>{current_dispatch_description}</li>
          <li>{current_dispatch_district}</li>
          <li>{current_dispatch_id}</li>
          <li>{current_dispatch_physical_map_ref}</li>
          <li>{current_dispatch_radiofreq}</li>
          <li>{current_dispatch_address}</li>
=======
          <li>Description</li>
          <li>{current_dispatch_description}</li>
          <li>Address</li>
          <li>{current_dispatch_address}</li>
          <li>Vehicles On Site</li>
          <li>{current_dispatch_apparatus_id_array}</li>
          <li>Nearest Cross Street</li>
          <li>{current_dispatch_nearest_xstreets}</li>
          <li>Radio Channel</li>
          <li>{current_dispatch_radio_channel}</li>
          <li>Physical Map Reference</li>
          <li>{current_dispatch_physical_map_ref}</li>
          <li>Dispatch Timestamp</li>
>>>>>>> added scss compiling and basic styles to existing components
          <li>{current_dispatch_time_stamp}</li>
          <li>Misc. Details</li>
          <li>{current_dispatch_misc}</li>
        </ul>
      </div>
    )
  }
}

window.DispatchDetails = DispatchDetails;
