import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log('App rendering')
    return (
        <div>
            <AppTitile />
            Article 1
            <Rating value={3}/>
            <Accordion/>
            Article 2
            <Rating value={4}/>
        </div>
    );
}
function AppTitile () {
    console.log('AppTitle rendering')
    return <div>This is App component!</div>
}

export default App;
