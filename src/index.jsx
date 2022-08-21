import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import App from './App';
import { app, firebaseConfig } from './firebase';

export const Context = createContext(null);
const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Context.Provider value={{
        auth,
        firebaseConfig
      }}>
        <App />
      </Context.Provider>
    </Router>
  </React.StrictMode>
);
