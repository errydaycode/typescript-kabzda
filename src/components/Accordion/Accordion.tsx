import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapse: () => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.setCollapse}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>Latte</li>
            <li>Cappucino</li>
            <li>Frappe</li>
            <li>Americano</li>

        </ul>
    )
}