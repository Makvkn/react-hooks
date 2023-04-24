import React from "react";

export interface ITodo {
    id: number;
    title: string;
    checked: boolean;
    todoItem?: React.ReactNode;
}

