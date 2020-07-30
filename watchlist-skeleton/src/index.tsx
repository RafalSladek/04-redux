import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose } from "redux";
import { reducer, addMovie } from "./reducer";
import { Provider } from "react-redux";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

interface FilmResult {
  title: string
}

fetch("https://ghibliapi.herokuapp.com/films")
  .then(response => response.json())
  .then(json => json.map((film: FilmResult) => store.dispatch(addMovie(film.title))));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
