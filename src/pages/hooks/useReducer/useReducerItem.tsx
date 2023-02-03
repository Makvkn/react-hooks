import React, {FC} from 'react';
import {ITodo} from "./types";

interface Props {
    todoItem:  ITodo;
    removeTodo: (todo: ITodo) => any
}

const UseReducerItem: FC<Props> = (props) => {
    return (
        <div>

            {props.todoItem.title}

            <button onClick={() => {props.removeTodo(props.todoItem)}} style = {{marginLeft: '10px'}}>Clear</button>
        </div>
    );
};

export default UseReducerItem;

