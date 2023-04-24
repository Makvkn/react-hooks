import React, {useState, useReducer} from 'react';
import UseReducerItem from "./useReducerItem"
import {ITodo} from "./types";

let  count = 0
const initialTodo = [
    {id: 1, title: "Dream", checked: true},
    {id: 2, title: "Work", checked: true},
    {id: 3, title: "Enjoy", checked: false}
];

function reducer(count: number, action: any) {
    switch (action.type) {
        case 'increment':
            return count + 1;
        case 'decrement':
            return count - 1
        default:
            return count;
    }
}

function reducerTodo(myTodo: Array<ITodo>, action: any) {
    console.log('lllllllllll')
    switch (action.type) {
        case 'add':
            return [...myTodo, action.todo];
        case 'remove':
            return myTodo = myTodo.filter(item => item.id != action.id);
        case 'checked':
            return myTodo
        default:
            return myTodo;
    }
}


const UseReducer = () => {

    const [inputValue, setInputValue] = useState('')
    const [count, dispatch] = useReducer(reducer, 0);
    const [myTodo, dispatchTodo] = useReducer(reducerTodo, initialTodo);

    const addTodo = (e: React.KeyboardEvent<any>) => {
        if (e.code === 'Enter') {
            let newTodo = {
                id: myTodo[myTodo.length-1].id + 1,
                title: inputValue,
                checked: false
            }
        dispatchTodo({type: 'add', todo: newTodo})
        setInputValue('')
        }
    }

    const removeTodo = (todo: ITodo) => {
        dispatchTodo({type: 'remove', id: todo.id})
        console.log('oooo')
    }

    const checkedTodo = (todo: any) => {
        dispatchTodo({type: 'checked', todo: todo})
    }




const addToCount = () => {
    dispatch({type: 'increment'})
}

const removeFromCount = () => {
    dispatch({type: 'decrement'})
}

    return (
        <div className="useState_container">
            <div>
                <h4>Todo App</h4>
                <div>
                    {myTodo.map(item =>
                        <UseReducerItem todoItem={item} key={item.id} removeTodo={removeTodo}/>
                    )}
                    <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} onKeyDown={addTodo} type="text"/>
                </div>

            </div>
<div>
    <h4>Counter</h4>
    <h2>{count}</h2>
    <button onClick={addToCount}>Plus</button>
    <button onClick={removeFromCount}>Minus</button>
</div>
        </div>
    );
};

export default UseReducer;