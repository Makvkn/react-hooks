import React, {useState} from 'react';
import UseStateItem from "./useStateItem";
import {ITodo} from "./types";

const UseState = () => {

    const [value, setValue] = useState<string>('')
    const [todo, setTodo] = useState<ITodo[]>([
        {id: 1, title: "Dream", checked: true},
        {id: 2, title: "Work", checked: true},
        {id: 3, title: "Enjoy", checked: false}
    ])

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        setValue(e.target.value)
    }

    const addTodo = (e: React.KeyboardEvent) => {
        if (e.code === 'Enter') {
            let newTodo:ITodo = {
                id: todo[todo.length-1].id + 1,
                title: value,
                checked: false
            }
            setTodo([...todo, newTodo])
            setValue('')
        }
    }

    return (
        <div className="useState_container">
            <h1>Hello From UseState</h1>
            <input onKeyDown={addTodo} onChange={changeHandler} value={value} type="text"/>
            {todo.map((item, index) =>
                <UseStateItem todoItem={item} key={index}/>
            )}
        </div>
    );
};

export default UseState;
