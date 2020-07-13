import React                                    from "react";
import ReactDOM                                 from "react-dom";
import { Provider }                             from "react-redux";
import reduxThunk                               from 'redux-thunk';
import { createStore,applyMiddleware,compose}   from "redux";

import "./index.css";
import App                                      from "./App";
import * as serviceWorker                       from "./serviceWorker";
import reducers                                 from "./Reducers/index";


const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;


const store = createStore(
  reducers,
  composeEnhacers(applyMiddleware(reduxThunk))
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
