import React, {useEffect, useState} from "react";

export const Clock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(()=> {

     const intervalId =   setInterval(()=> {
         console.log('TICK')
            setDate(new Date())
        }, 1000)

        return ()=> {
            clearInterval(intervalId)
        }
    }, [])

    const getTwoDigitStr = (num: number) => num < 10 ? '0' + num : num

    const hours = getTwoDigitStr(date.getHours())
    const minutes = getTwoDigitStr(date.getMinutes())
    const seconds = getTwoDigitStr(date.getSeconds())

    return <>

        <h3>  {hours} : {minutes} :  {seconds}</h3>
    </>

}