import React from 'react'

var Topic = (props) => {
  return <h1>{props.match.params.name}</h1>
}

window.Topic = Topic;