// import React from "react";
// import ReactDOM  from 'react-dom';


// import { Provider} from  'react-redux';
// import {createStore, applyMiddleware, compose} from 'redux';
// import {thunk}from 'redux-thunk';
// import reducers from './reducers';
// import App from './App';


// const store = createStore(reducers, compose(applyMiddleware(thunk)))

 
// ReactDOM.render(
//     <Provider store={store}>
//            <App />

//     </Provider>,

//   document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import reducers from './reducers';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Ensure correct import
import './index.css';

const theme = createTheme({
  // Define your theme customization here if needed
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
