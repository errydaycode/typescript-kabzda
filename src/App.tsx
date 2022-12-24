import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log('App rendering')
    return (
        <div>
            <AppTitile />
            <Rating />
            <Accordion/>
            <Rating />
        </div>
    );
}
function AppTitile () {
    console.log('AppTitle rendering')
    return <>This is App component!</>
}

export default App;
