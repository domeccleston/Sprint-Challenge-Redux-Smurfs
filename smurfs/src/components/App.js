import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import Axios from 'axios';
import * as actionCreators from '../actions/index';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
/* class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
} */

function App(props) {

  console.log(props.smurfs.smurfs)

  useEffect(() => {
    props.fetchSmurfs()
  }, [])

  async function fetchNewSmurfs() {
    const newData = props.fetchSmurfs();
  }

  return(
    <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div>Count: {props.count}</div>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
        <button onClick={fetchNewSmurfs}>Start</button>
        {props.smurfs.fetchingSmurfs && <p>Fetching your smurfs</p>}
        {props.smurfs.smurfs && <h3>{props.smurfs.smurfs}</h3>}
      </div>
  );

  }

export default connect(state => state, actionCreators)(App);
