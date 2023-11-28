import React, {useState} from 'react';
import './App.css';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {AppTitle} from "./components/AppTitle/AppTitle";
import {UncOnoff} from "./components/UncOnOff/UncOnoff";
import {UncAcc} from "./components/UncontrolledAcc/UncAcc";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {ControlledOnoff} from "./components/OnOff/ControlledOnoff";
import {Select, SelectItemType} from "./components/select/Select";


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
    const [parentValue, setParentValue] = useState('2')

    const itemsForSelect: SelectItemType[] = [
        {title: 'none', id: '0', population: 0},
        {title: 'Russia', id: '1',  population: 1499999},
        {title: 'USA', id: '2', population: 3490000},
        {title: 'Canada', id: '3',  population: 49000}
    ]

    function setNewSelectOption(selectId: any) {
        setParentValue(selectId)
    }

    return (
        <div className={"App"}>
            <Select value={parentValue} onChange={setNewSelectOption} items={itemsForSelect}/>
            <Rating value={ratingValue} onClick={setRatingValue} />
            {/*<UncontrolledRating/>*/}
            <Accordion titleValue={"--Menu--"} items={[]} collapsed={collapse} setCollapse={ ()=> {setCollapse(!collapse)}} onClick={()=> {}} />
            <UncOnoff onChange={setTurned} /> {turned.toString()}
            <UncAcc titleValue={'error'}/>
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




