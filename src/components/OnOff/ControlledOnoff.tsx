import React, {useState} from 'react';

type PropsType={
    turned: boolean
    setTurned: (t: boolean) => void
}



export const ControlledOnoff =(props: PropsType)=> {


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "3px",
        backgroundColor: props.turned ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "4px",
        padding: "3px",
        backgroundColor: props.turned ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "8px",
        backgroundColor: props.turned ? "green" : "red"
    }

    return (
        <div>

            <div style={onStyle}  onClick={()=> { props.setTurned(true) }}>On</div>
            <div style={offStyle} onClick={()=> {  props.setTurned(false)}}> Off</div>
            <div style={indicatorStyle}></div>


        </div>

    )

}