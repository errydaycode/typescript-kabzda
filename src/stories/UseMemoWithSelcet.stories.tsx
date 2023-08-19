
import {useMemo, useState} from "react";
import React from "react";
import {Select, SelectItemType} from "../components/select/Select";


export default  {
    title: 'Use memo for selects'
}





export const SelectsWithFilters = () => {

    console.log('SelectsWithFilters')

    const [counter, setCounter] = useState(0)
    const [value1, setValue1] = useState('2')
    const [value2, setValue2] = useState('2')
    const [value3, setValue3] = useState('2')
    const [state, setState] = useState<SelectItemType[]>([
        {id: '1', title: 'Minsk',population: 3, countryID: '2'},
        {id: '2', title: 'Moscow',population: 10 , countryID: '1'},
        {id: '3', title: 'Kiev',population: 7 , countryID: '3'},
        {id: '4', title: 'Gomel',population: 1 , countryID: '2'},
        {id: '5', title: 'Brest',population: 0.3 , countryID: '2'},
        {id: '6', title: 'Saint-Petersburg',population: 6.5 , countryID: '1'},
        {id: '7', title: 'Vladivostok',population: 5, countryID: '1'},
        {id: '8', title: 'Odessa',population: 4 , countryID: '3'},
        {id: '9', title: 'Melitopol',population: 2 , countryID: '3'},
    ])

    const startsFromM = useMemo(()=> {
      return   state.filter(c=> c.title.toLowerCase().startsWith('m'))
    }, [state])

    const russiansCities = useMemo(()=> {
        return state.filter(c=> c.population > 5)
    }, [state])

    const bigPopulation = useMemo(()=>{ return state.filter(c => c.population > 5)}, [state])

    return <>
        <button onClick={()=> {setCounter(counter + 1) }} >+</button>
        {counter}
        <div style={{ display: 'inline-block' }}>
            <Select value={value1} onChange={setValue1} items={startsFromM} />
        </div> <div style={{ display: 'inline-block' }}>
            <Select value={value2} onChange={setValue2} items={russiansCities} />
        </div> <div style={{ display: 'inline-block' }}>
            <Select value={value3} onChange={setValue3} items={bigPopulation} />
        </div>

    </>
}



// const UsersSecret = (props: {users: Array<string>}) => {
//     console.log('USERS SECRET')
//     return <div>{
//         props.users.map((u, index) => <div key={index}>{u}</div>)
//     }</div>
// }
//
// const Users = React.memo(UsersSecret);
//
//
//
// export const HelpsToReactMemo = () => {
//     console.log('HelpsToReactMemo')
//     const [counter, setCounter] = useState(0)
//     const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])
//
//
//    const newArray = useMemo(()=> {
//        return  users.filter(u=> u.toLowerCase().indexOf('a') > -1 )
//    }, [users])
//
//
//     return <>
//         <button onClick={()=> {setCounter(counter + 1) }} >+</button>
//         {counter}
//         <Users users={newArray}/>
//         <button onClick={ () => {setUsers([...users, 'Ivan'])} }>add user</button>
//     </>
//
// }
