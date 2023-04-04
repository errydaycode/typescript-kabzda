import React, {useState} from 'react';
import './App.css';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {AppTitle} from "./components/AppTitle/AppTitle";
import {UncOnoff} from "./components/UncOnOff/UncOnoff";
import {UncAcc} from "./components/UncontrolledAcc/UncAcc";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {ControlledOnoff} from "./components/OnOff/ControlledOnoff";


// function hello() {
//     debugger
//     alert('Hello IT_KAMASUTRA')
// }
//  hello()

function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let[collapse, setCollapse] = useState(true)
    const [turned, setTurned] = useState(false)
    return (
        <div className={"App"}>
            <Rating value={ratingValue} onClick={setRatingValue} />
            <UncontrolledRating/>
            <Accordion titleValue={"--Menu--"} collapsed={collapse} setCollapse={ ()=> {setCollapse(!collapse)}} />
            <UncOnoff onChange={setTurned} /> {turned.toString()}
            {/*<ControlledOnoff turned={turned} setTurned={setTurned} />*/}
{/*
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <UncontrolledRating value={1}/>
            <UncontrolledRating value={2}/>
            <UncontrolledRating value={3}/>
            <UncontrolledRating value={4}/>
            <UncontrolledRating value={5}/>
            <UncOnoff turned={true}/>*/}
            {/*<UncOnoff turned={false}/>
            <UncOnoff turned={true}/>*/}

         {/*   <UncAcc titleValue={"Users"} />*/}



        {/*    <UncOnoff />
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />*/}
        </div>
    );
}

export default App;
