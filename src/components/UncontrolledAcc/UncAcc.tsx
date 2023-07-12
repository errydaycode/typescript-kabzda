import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    titleValue: string
    /*collapsed: boolean*/
}

type ActionType = {
    type: string
}

const toggleConstant = 'TOGGLE-COLLAPSED'

const reducer = (state: boolean, action: ActionType) => {
    switch (action.type ) {
        case toggleConstant :
        return !state;
        default:
            throw new Error('Bad action type')
    }
    return state
}

export function UncAcc(props: AccordionPropsType) {

    // const [collapsed, setCollapsed] = useState(false)

    const [collapsed, dispatch] = useReducer(reducer,false)

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={()=>setCollapsed(!collapsed)} />*/}

            <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type: toggleConstant })}} />
            {!collapsed && <AccordionBody/>}
    </div>
)
}


type AccordionTitlePropsType = {
    title: string
    onClick : ()=> void


}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=> { props.onClick() }}> {props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>User 1</li>
    <li>User 2</li>
    <li>User 3</li>
    <li>User 4</li>

    </ul>
)
}