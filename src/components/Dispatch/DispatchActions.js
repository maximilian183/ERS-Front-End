export function SetCurrentDispatch( apparatus_id_array, crossstreets, description, district, id, map, radiofreq, streetname, streetnumber, timeout, misc){
  return {
    type: 'SET_CURRENT_DISPATCH',
    payload: {
      apparatus_id_array: apparatus_id_array,
      crossstreets: crossstreets,
      description: description,
      district: district,
      id: id,
      map: map,
      radiofreq: radiofreq,
      address: streetnumber + ' ' + streetname,
      time_stamp: timeout,
      misc: misc || '',
    }
  }
}