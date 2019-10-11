/* import React from 'react'
import { connect } from 'react-redux';
import * as actionCreators from "../actions/index";

function SmurfForm(props) {
    console.log(props)
    return (
     <form onSubmit={props.handleFormSubmit}>
      <input
        name="name"
        onChange={props.handleFormChange}
        type="text"
        placeholder="Smurf Name"
      ></input>
      <input
        name="age"
        onChange={props.handleFormChange}
        type="text"
        placeholder="Smurf Age"
      ></input>
      <input
        name="height"
        onChange={props.handleFormChange}
        type="text"
        placeholder="Smurf Height"
      ></input>
      <button>Add</button>
      <button onClick={props.fetchNewSmurfs}>Update</button>
    </form>
    )
  }

export default connect(state => state, actionCreators)(SmurfForm); */
