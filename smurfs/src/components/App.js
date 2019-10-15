import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";
import SmurfForm from "./SmurfForm";
import { Button, Card, Form } from "semantic-ui-react";
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
    props.fetchSmurfs();
  }

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your Redux version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <Button onClick={fetchNewSmurfs}>Update</Button>
      {props.smurfs.fetchingSmurfs && <p>Fetching your smurfs</p>}

      {props.smurfs.smurfs &&
        props.smurfs.smurfs.map(smurf => (
          <Card>
            <Card.Header>{smurf.name}</Card.Header>
            <Card.Description>{smurf.age} years old </Card.Description>
            <Card.Description>{smurf.height}</Card.Description>
          </Card>
        ))}

      <Form className="smurf-form" onSubmit={handleFormSubmit}>
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
        <Button>Add</Button>
      </Form>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(App);
