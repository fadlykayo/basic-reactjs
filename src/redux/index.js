import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

class Redux extends Component {
  render() {
    return (
      <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
          { this.props.children }
        </PersistGate>
      </Provider>
    );
  }
}

export { Redux, store };
