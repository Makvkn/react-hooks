import React, {FC} from 'react';
import {ITodo} from "./types";

interface Props {
    todoItem:  ITodo;
}

const UseStateItem: FC<Props> = (props) => {
    return (
        <div>
            {props.todoItem.title}
        </div>
    );
};

export default UseStateItem;

