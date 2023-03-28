import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './store/slices/mainReducer';


const root = ReactDOM.createRoot(document.getElementById('root'));

let persistor=persistStore(store);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

