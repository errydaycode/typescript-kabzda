import React from "react";

type ItemType={
    title: string
    value: any
}


export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapse: () => void
    /**
     * Elements that are showed when accordion is opened. Each item should be ItemType
     */
    items: ItemType[]
    /**
     * Callback that is called when any item clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
    /**
     * color of header text (optional)
     */
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={props.setCollapse}
                           color={props.color}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3
            style={{color: props.color ? props.color : 'purple'}}
            onClick={()=>props.onClick()}>{props.title}
        </h3>

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