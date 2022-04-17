import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { makeServer } from "./server";
import './index.css'

// Call make Server
makeServer();
ReactDOM.render(
    <App />,
  document.getElementById('root')
);