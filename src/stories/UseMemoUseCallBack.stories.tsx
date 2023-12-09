
import {useCallback, useMemo, useState} from "react";
import React from "react";


export default  {
    title: 'Use memo'
}




export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)


    let resultA = 1;
    let resultB = 1;


   resultA = useMemo(()=> {
       let tempResultA = 1;
        for(let i = 1; i<= a; i++) {
            let fake = 0;
            while (fake < 100000000){
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
       return tempResultA
    },[a])




    for(let i = 1; i<= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e)=>setA(Number(e.currentTarget.value))} />
        <input value={b} onChange={(e)=>setB(+e.currentTarget.value)} />

        <hr/>
        <div>
            Result for a : {resultA}
        </div>
        <div>
            Result for b : {resultB}
        </div>

    </>
}



const UsersSecret = (props: {users: Array<string>}) => {
    console.log('USERS SECRET')
    return <div>{
        props.users.map((u, index) => <div key={index}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret);



export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])


   const newArray = useMemo(()=> {
       return  users.filter(u=> u.toLowerCase().indexOf('a') > -1 )
   }, [users])

    // const newArray = users.filter(u=> u.toLowerCase().indexOf('a') > -1 )

    return <>
        <button onClick={()=> {setCounter(counter + 1) }} >+</button>
        {counter}
        <Users users={newArray}/>
        <button onClick={ () => {setUsers([...users, 'Ivan'])} }>add user</button>
    </>

}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])



    const memoizedAddBook = useMemo(()=> {
        return () => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    } , [books])


    const memoizedAddBook2 = useCallback( () => {
            console.log(books)
            const newBooks = [...books, 'Angular' + books.length]
            setBooks(newBooks)
        }
     , [books])

    const memoizedFilteredBooks = useMemo(()=> {
        return  books.filter(b=> b.toLowerCase().indexOf('a') > -1 )
    }, [books])

    return <>
        <button onClick={()=> {setCounter(counter + 1) }} >+</button>
        {counter}
        <Books books={memoizedFilteredBooks}  addBook={memoizedAddBook2}/>

    </>

}

 type BooksSecretPropsType= {
        books: Array<string>
    addBook: ()=> void
}


const BooksSecret = ({ books, addBook }: BooksSecretPropsType)=> {
    console.log('BOOKS SECRET')
    return <div>
        <button onClick={ ()=> addBook()}>add book</button>
        {books.map(book=> <div>{book}</div> )}
    </div>
}

const Books = React.memo(BooksSecret);