import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './action/sample/index';
import counterReducer from './reducer/sample/counter';
import loggedReducer from './reducer/sample/isLogged';

function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLoggedIn = useSelector(state => state.loggedReducer)

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h3>{counter}</h3>
      <button onClick={()=> dispatch(increment())}>Plus</button>
      <button onClick={()=> dispatch(decrement())}>Minus</button>
      {isLoggedIn}

    </div>
  );
}

export default App;
