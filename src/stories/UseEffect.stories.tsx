
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


export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')




    useEffect(()=> {
        setInterval(()=> {
            setCounter(state => state + 1)
        },1000)
    }, [])




    return <>
        Hello, counter : {counter}
        {/*<button onClick={()=> setCounter(counter + 1) } > counter +</button>*/}
        {/*{fake}*/}
        {/*<button onClick={()=> setFake(fake + 1) } >fake +</button>*/}

    </>

}
