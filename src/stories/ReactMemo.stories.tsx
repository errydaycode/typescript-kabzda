
import {useState} from "react";
import React from "react";


export default  {
    title: "React memo demo"
}


const NewMessagesCounter = (props: {count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('UsersSecret!')
    return <div>{
        props.users.map((u, index) => <div key={index}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret);



export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])


    const adduser = () => {
        const newUsers = [...users, 'Sveta' + users.length ]
        setUsers(newUsers)
    }


    return <>
        <button onClick={()=> {setCounter(counter + 1) }} >+</button>
        <button onClick={adduser} >add user</button>
        <NewMessagesCounter count={counter} />
        <Users users={users}/>
    </>

}


