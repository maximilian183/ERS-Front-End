export default function reducer( state = {
  current_dispatch_description: null,
  current_dispatch_address: null,
  current_dispatch_apparatus_id_array: [],
  current_dispatch_nearest_xstreets: null,
  current_dispatch_radio_channel: null,
  current_dispatch_physical_map_ref: null,
  current_dispatch_time_stamp: null,
  current_dispatch_misc: null,
  }, action ) {

  switch (action.type) {
    case 'SET_CURRENT_DISPATCH': {
      return {...state,
        current_dispatch_description: action.payload.description,
        current_dispatch_address: action.payload.address,
        current_dispatch_apparatus_id_array: action.payload.apparatus_id_array,
        current_dispatch_nearest_xstreets: action.payload.nearest_xstreets,
        current_dispatch_radio_channel: action.payload.radio_channel,
        current_dispatch_physical_map_ref: action.payload.physical_map_ref,
        current_dispatch_time_stamp: action.payload.time_stamp,
        current_dispatch_misc: action.payload.misc,
      }
    }
  }
  return state;
}