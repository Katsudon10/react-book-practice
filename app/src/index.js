import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateForm from './components/StateForm';
import StateTodo from './components/StateTodo';
import FormBasic from './components/FormBasic';
import FormYup from './components/FormYup';
import LazyBasic from './components/LazyBasic';
import SuspenseSimple from './components/SuspenseSimple';
import SuspenseResult from './components/SuspenseResult';
import ProfilerBasic from './components/ProfilerBasic';
import StyledBasic from './components/StyledBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledBasic />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
