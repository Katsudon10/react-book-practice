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
import StyledComp from './components/StyledComp';
import { MyButton, MyStyledButton } from './components/StyleComp2';
import StyledCommon from './components/StyledCommon';
import GlobalStyle from './components/StyleGlobal';
import StyledProps from './components/StyledProps';
import EmotionJsx from './components/EmotionJsx';
import PortalBasic from './components/PortalBasic';
import ErrorRoot from './components/ErrorRoot';
import ErrorRetryThrow from './components/ErrorRetryThrow';
import ErrorRetryRoot from './components/ErrorRetryRoot';
import MaterialBasic from './components/MaterialBasic';
import MaterialDrawer from './components/MaterialDrawer';
import MaterialGrid from './components/MaterialGrid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MaterialGrid />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
