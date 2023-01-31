import React from 'react';
import './App.css';


// function hello() {
//     debugger
//     alert('Hello IT_KAMASUTRA')
// }
//  hello()

function App() {
    console.log('App rendering')
    return (
        <div>
           <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle () {
    console.log('AppTitle rendering')
    return <>This is App Component</>
}

function Star () {
    console.log('Star rendering')
    return (
        <div>star</div>
    )
}

function Rating() {
    console.log('Rating rendering')
    return (
        <div>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
        </div>
    )
}



function Accordion () {
    console.log('Accordion rendering')
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>
    )
}

function AccordionTitle () {
    console.log('AccordionTitle rendering')
    return (
            <h3>Меню</h3>
    )
}

function AccordionBody () {
    console.log('AccordionBody rendering')
    return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
    )
}

export default App;
