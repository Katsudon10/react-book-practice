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

import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './components/theme';
import MaterialMode from './components/MaterialMode';
import FormMui from './components/FormMui';
import QueryPre from './components/QueryPre';

import { Query, QueryClient, QueryClientProvider } from 'react-query';
import QueryBasic from './components/QueryBasic';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import QuerySuspense from './components/QuerySuspense';
import StateEffect from './components/StateEffect';
import HookTimer from './components/HookTimer';
import HookEffect from './components/HookEffect';
import HookRefNg from './components/HookRefNg';
import HookRef from './components/HookRef';
import HookRefForward from './components/HookRefForward';
import HookCallbackRef from './components/HookCallbackRef';
import HookReducer from './components/HookReducer';
import HookReducerUp from './components/HookReducerUp';
import HookReducerInit from './components/HookReducerInit';
import HookContext from './components/HookContext';
import MyThemeProvider from './components/MyThemeProvider';
import HookThemeButton from './components/HookThemeButton';

import { RecoilRoot } from 'recoil';
import RecoilCounter from './components/RecoilCounter';
import RecoilTodo from './components/RecoilTodo';
import HookMemo from './components/HookMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HookMemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
