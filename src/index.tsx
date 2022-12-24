import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
      <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






// let a = {
//     name: 'Georgii',
//     surname: 'Listopad',
//         adress: {
//             city: 'Zelenograd',
//             country: 'Russia '
//         }
// };
//
// let users = [
//     {
//     name: 'Georgii',
//     surname: 'Listopad',
//     adress: {
//         city: 'Zelenograd',
//         country: 'Russia '
//     }
// },
//
//     {
//         name: 'George',
//         surname: 'Listopades',
//         adress: {
//             city: 'Los-Angeles',
//             country: 'USA'
//         }
//
//     }
//
// ]
//
// let b : Array<boolean | number | string>;
//
// b = [1,2,3,4,5];
// b = ['any', 'str']
// b = [8,16,32,1675]
// b = [true, false]
//
//
//
//
// console.log(users[0].adress.country)