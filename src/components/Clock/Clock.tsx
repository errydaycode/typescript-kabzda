import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode: 'digital' | 'analog'
}


export type ClockViewPropsType = {
    date: Date
}


export const Clock: React.FC<PropsType> = ({mode}) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])
    let view;
    switch (mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital":

            view = <DigitalClockView date={date}/>
    }
    return <>
        {view}
    </>
}



