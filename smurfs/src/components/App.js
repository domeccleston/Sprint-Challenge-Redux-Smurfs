import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";

function App(props) {
  console.log(props.smurfs.smurfs.map(smurf => smurf.name));

  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  async function fetchNewSmurfs() {
    const newData = props.fetchSmurfs();
  }

  function handleFormChange(event) {
    props.setForm(event.target);
    console.log(event.target.name);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    props.addSmurf(props.form);
  }

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your Redux version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <div>Count: {props.count}</div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <button onClick={fetchNewSmurfs}>Update</button>
      {props.smurfs.fetchingSmurfs && <p>Fetching your smurfs</p>}

      {props.smurfs.smurfs &&
        props.smurfs.smurfs.map(smurf => (
          <>
            <h3>{smurf.name}</h3>
            <h3>{smurf.age}</h3>
            <h3>{smurf.height}</h3>
          </>
        ))}

      <form onSubmit={handleFormSubmit}>
        <input
          name="name"
          onChange={handleFormChange}
          type="text"
          placeholder="Smurf Name"
        ></input>
        <input
          name="age"
          onChange={handleFormChange}
          type="text"
          placeholder="Smurf Age"
        ></input>
        <input
          name="height"
          onChange={handleFormChange}
          type="text"
          placeholder="Smurf Height"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(App);
