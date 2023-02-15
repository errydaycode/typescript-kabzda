import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//
// let a = {
//     name : " Gera",
//     age: 19,
//     address : {
//         city: 'Moscow',
//         country: 'Russia'
//     }
//
// };
//
//
//
// let users = [
//     {
//         name : " Gera",
//         age: 19,
//         address : {
//             city: 'Moscow',
//             country: 'Russia'
//         }
//
//     },
//     {
//         name : " Ivan",
//         age: 43,
//         address : {
//             city: 'NY',
//             country: 'USA'
//         }
//
//     }
//     ]
//
//
//
// let b: Array<string | number>;
//
// b= [1,2,3,4,5]
// b= [1,2,3,4,5, 4343, 5, 3, 19, 343]
// b= ['alloha', 'radio', 'uuuu']
// b= [true, false]
//
//
// console.log(users[1].address.country)
