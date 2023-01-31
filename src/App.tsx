import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {AppTitle} from "./components/AppTitle/AppTitle";


// function hello() {
//     debugger
//     alert('Hello IT_KAMASUTRA')
// }
//  hello()

function App() {
    console.log('App rendering')
    return (
        <div>
           <AppTitle title={"Artice about Forest"}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={"First Acc"}/>
            <Accordion title={"Second Acc"}/>
            <AppTitle title={"Article about IT"}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;
