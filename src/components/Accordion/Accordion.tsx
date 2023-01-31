import React from "react";

type AccordionPropsType={
    title: string
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </>
    )
}

function AccordionTitle(props: AccordionPropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}