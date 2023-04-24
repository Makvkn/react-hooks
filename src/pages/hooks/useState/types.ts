import React from "react";

export interface ITodo {
    id: number;
    title: string;
    checked: boolean;
    todoItem?: React.ReactNode;
}
//
// import React, {useState, useReducer} from 'react';
// import UseStateItem from "./useStateItem";
// import {ITodo} from "./types";
//
// const initialState = [
//     {id: 1, title: "Dream", checked: true},
//     {id: 2, title: "Work", checked: true},
//     {id: 3, title: "Enjoy", checked: false}
// ];
//
// function reducer(state: any, action: any) {
//     switch (action.type) {
//         case 'add':
//             return [...state, {id: action.id, title: action.title, checked: false }];
//         case 'decrement':
//             return {count: state.count - 1};
//         default:
//             throw new Error();
//     }
// }
//
//
// const UseReducer = () => {
//
//     const [value, setValue] = useState<string>('')
//     const [todo, setTodo] = useState<ITodo[]>([
//         {id: 1, title: "Dream", checked: true},
//         {id: 2, title: "Work", checked: true},
//         {id: 3, title: "Enjoy", checked: false}
//     ])
//     // const [bool, setBool] = useState(false)
//
//     const [state, dispatch] = useReducer(reducer, initialState);
//
//
//
//
//     const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//
//         setValue(e.target.value)
//     }
//
//     const addTodo = (e: React.KeyboardEvent) => {
//         if (e.code === 'Enter') {
//             let newTodo:ITodo = {
//                 id: todo[todo.length-1].id + 1,
//                 title: value,
//                 checked: false
//             }
//             setTodo([...todo, newTodo])
//             setValue('')
//         }
//     }
//
//     const changeBool = () => {
//
//         dispatch({type: 'add', id: 5, title: 'lol', checked: false })
//         console.log(state)
//         // setBool(prev => !prev)
//     }
//
//
//     return (
//         <div className="useState_container">
//             <h1>Hello From UseState</h1>
//     <input onKeyDown={addTodo} onChange={changeHandler} value={value} type="text"/>
//         {todo.map((item, index) =>
//                 <UseStateItem todoItem={item} key={index}/>
// )}
//     <hr />
//     <button onClick={changeBool}>Change bool</button>
//     {/*<div>*/}
//     {/*    {state.bol ? <h1>True</h1> : <h1>False</h1>}*/}
//     {/*</div>*/}
//     <hr />
//     <div>
//         {/*{state[0].title}*/}
//     <button onClick={changeBool}>Add Todo</button>
//     {/*<button onClick={() => dispatch({type: 'increment'})}>+</button>*/}
//     </div>
//     </div>
// );
// };
//
// export default UseReducer;
