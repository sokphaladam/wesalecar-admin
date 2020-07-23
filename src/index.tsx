import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createStore } from 'redux';
import rootReducer from './libs/redux/reducers/index';
import firebase from './libs/Firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { composeWithDevTools } from 'redux-devtools-extension';
import $ from 'jquery';

(window as any).$ = (window as any).jQuery =$;

const store = createStore(rootReducer, composeWithDevTools());
const script_tag = document.createElement('script');

script_tag.src = 'https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js';
document.body.appendChild(script_tag);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
        config={{
          userProfile: 'users',
          useFirestoreForProfile: true
        }}
      >
          <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
