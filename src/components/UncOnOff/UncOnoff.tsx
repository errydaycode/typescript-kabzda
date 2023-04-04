import React, {useState} from 'react';

type PropsType={
  //   turned: boolean
    onChange: (turned: boolean) => void
    defaultOn?: boolean
}



export const UncOnoff =(props: PropsType)=> {

    const [turned, setTurned] = useState(props.defaultOn ? props.defaultOn : false)

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

    const onClicked = () => {
        setTurned(true)
        props.onChange(true)
    }
    const offClicked = () => {  setTurned(false)
        props.onChange(false)
    }


    return (
        <div>

            <div style={onStyle}  onClick={onClicked }>On</div>
            <div style={offStyle} onClick={offClicked}> Off</div>
            <div style={indicatorStyle}></div>


        </div>

    )

}