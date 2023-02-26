import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {AppTitle} from "./components/AppTitle/AppTitle";
import {Onoff} from "./components/OnOff/Onoff";
import {UncAcc} from "./components/UncontrolledAcc/UncAcc";


// function hello() {
//     debugger
//     alert('Hello IT_KAMASUTRA')
// }
//  hello()

function App() {
    console.log('App rendering')
    return (
        <div>
{/*
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Onoff turned={true}/>*/}
            {/*<Onoff turned={false}/>
            <Onoff turned={true}/>*/}
            <UncAcc titleValue={"Menu"} />
            <UncAcc titleValue={"Users"} />
            <Onoff />
            <Onoff />
        </div>
    );
}

export default App;
