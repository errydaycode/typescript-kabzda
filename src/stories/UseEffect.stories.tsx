
import {useEffect,  useState} from "react";
import React from "react";


export default  {
    title: "useEffect demo"
}


export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('Component rendered')




    useEffect(()=> {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(()=> {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

//СНАЧАЛА ОТРИСОВЫВАЕТСЯ JSX, ТОЛЬКО ПОТОМ ЗАПУСКАЕТСЯ SIDE EFFECT
    //В КОТОРОМ МЫ ДЕЛАЕМ ЧТО-ТО ЗА РАМКАМИ ДОЗВОЛЕННОГО
    useEffect(()=> {

        console.log('useEffect  first render and every counter change')
        document.title = counter.toString()
        // ЕСЛИ  хотим сделать грязь, то делаем это в юзЭффекте (в колл Беке переданном в юз эффект)
        //SideEffects : // сторонний эфект, за пределами комп-ты
        // api.getUsers().then('') - запрос  на сервер
        //setInterval async code
        //indexedDB
        //document.getElementID
        //document.title = "User"

    }, [counter]) // без зависимостей срабатывает каждый рендер, с [] пустым массивом в зависимостях сработет 1ый рендер и все
        // с [counter] конкретной зависимостью будет срабатывать при изменении этой зависимости

        //  Сначала происходит отрисовка контента, потом только запускается useEffect!!!


    return <>

        Hello, {counter}
        <button onClick={()=> setCounter(counter + 1) } > counter +</button>
        {fake}
        <button onClick={()=> setFake(fake + 1) } >fake +</button>

    </>

}


export const SetIntervalExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(()=> {
     const interval =   setInterval(()=> {
            setCounter(state => state + 1)
        },1000)

        return ()=> {
         clearInterval(interval)
        }
    }, [])




    return <>
        Hello, counter : {counter}
        {/*<button onClick={()=> setCounter(counter + 1) } > counter +</button>*/}
        {/*{fake}*/}
        {/*<button onClick={()=> setFake(fake + 1) } >fake +</button>*/}

    </>

}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('Component rendered')

    useEffect(()=> {
        console.log('Effect occurred - ' + counter)


        return ()=> {
            console.log('RESET EFFECT ' + counter)
        }

    }, [counter])

    return <>
        Hello, counter : {counter} <button onClick={()=>{setCounter(counter + 1) } }>  +</button>
    </>

}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')


    console.log('Component rendered with ' + text)

    useEffect(()=> {
        const handler = (e: KeyboardEvent)=> {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return ()=> {
            window.removeEventListener('keypress', handler)
        }

    }, [text])

    return <>
        Typed text : {text}
    </>

}

export const SetTimeoutExample = () => {

    const [text, setText] = useState('')


    console.log('Component rendered with ' + text)

    useEffect(()=> {
        const timeoutId = setTimeout(()=> {
            setText('3 seconds passed')
        }, 3000)
        return ()=> {
            clearTimeout(timeoutId)
        }

    }, [text])

    return <>
        text : {text}
    </>

}
