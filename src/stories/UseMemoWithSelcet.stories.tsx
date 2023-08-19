
import {useMemo, useState} from "react";
import React from "react";
import {Select, SelectItemType} from "../components/select/Select";


export default  {
    title: 'Use memo for selects'
}





export const SelectsWithFilters = () => {

    console.log('SelectsWithFilters')

    const [counter, setCounter] = useState(0)
    const [value, setValue] = useState('2')
    const [state, setState] = useState<SelectItemType[]>([
        {id: '1', title: 'Minsk',population: 15000000 , countryID: '16'},
        {id: '2', title: 'Moscow',population: 15000000 , countryID: '16'},
        {id: '3', title: 'Kiev',population: 15000000 , countryID: '16'},
        {id: '3', title: 'Kiev',population: 15000000 , countryID: '16'},
        {id: '3', title: 'Kiev',population: 15000000 , countryID: '16'},
        {id: '3', title: 'Kiev',population: 15000000 , countryID: '16'},
        {id: '3', title: 'Kiev',population: 15000000 , countryID: '16'},
    ])





    return <>
        <button onClick={()=> {setCounter(counter + 1) }} >+</button>
        {counter}
        <Select value={value} onChange={setValue} items={state} />

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
