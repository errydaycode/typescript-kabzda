import React from "react";

type ItemType={
    title: string
    value: any
}


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapse: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.setCollapse}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>props.onClick()}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    onClick: (value: any) => void
    items: ItemType[]
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map( (i,index) => <li key={index} onClick={()=> {props.onClick(i.value)}}>{i.title}</li> )}
        </ul>
    )
}