import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntire = () => {
  root.render(
      <React.StrictMode>
          <App />
      </React.StrictMode>
  );
}
renderEntire()

// subscribe(renderEntire)

// const subscribe = (observer) => {
//   renderEntire = observer;
// }
// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
