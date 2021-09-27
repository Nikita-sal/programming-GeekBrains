import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createElement } from 'react';
import { Children } from 'react';


// const Message = React.createElement ( 'li', 
//   {
//     className: 'li'
//   }, 'My first React project');

// ReactDOM.render ( Massage, document.getElementById ('root'));


function sayHi (Message) {
  const massage = Message;
  return massage;
}

ReactDOM.render(
  <React.StrictMode>
    <App  massage={sayHi('Hello GB! This is my first React project!')}/>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();