import React from "react";
import {ClockViewPropsType} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {

    const getTwoDigitStr = (num: number) => num < 10 ? '0' + num : num
    return <>

        <span> {getTwoDigitStr(date.getHours())} </span> :
        <span> {getTwoDigitStr(date.getMinutes())} </span> :
        <span> {getTwoDigitStr(date.getSeconds())} </span>
    </>
}