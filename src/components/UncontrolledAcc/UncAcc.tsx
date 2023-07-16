import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordionPropsType = {
    titleValue: string
    /*collapsed: boolean*/
}

export function UncAcc(props: AccordionPropsType) {

    // const [collapsed, setCollapsed] = useState(false)

    const [state, dispatch] = useReducer(reducer,{collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={()=>setCollapsed(!collapsed)} />*/}

            <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type: TOGGLE_COLLAPSED })}} />
            {!state.collapsed && <AccordionBody/>}
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