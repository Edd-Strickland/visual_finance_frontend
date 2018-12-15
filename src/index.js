import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from './reducers/index'
import AgeQuestionnaire from './components/AgeQuestionnaire'
import NationalCharts from './components/NationalCharts'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <Switch>
        <Route path="/AgeQuestionnaire" component={AgeQuestionnaire} />
        <Route path="/NationalCharts" component={NationalCharts} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
