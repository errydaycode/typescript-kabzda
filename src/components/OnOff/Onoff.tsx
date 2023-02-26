import React, {useState} from 'react';
import s from './Onoff.module.css'

type PropsType={
  //   turned: boolean
}



export const Onoff =(props: PropsType)=> {
    console.log("Onoff rendering")
    const [turned, setTurned] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "3px",
        backgroundColor: turned ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "4px",
        padding: "3px",
        backgroundColor: turned ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "8px",
        backgroundColor: turned ? "green" : "red"
    }

    return (
        <div>

            <div style={onStyle}  onClick={()=> { setTurned(true) }}>On</div>
            <div style={offStyle} onClick={()=> {  setTurned(false)}}> Off</div>
            <div style={indicatorStyle}></div>


        </div>

    )

}