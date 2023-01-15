import React, {FC, useState} from 'react';
import MyButton from "./MyButton";
import MyAlert from "./MyAlert";

const Main = () => {

    const [showMess, setShowMess] = useState(false)
    let lol = 'Hello from UseContext'

    const changeMess = () => {
        setShowMess(prev => prev = !prev)
    }

    return (
        <div>
            <MyButton change={changeMess} />
            <MyAlert mess={showMess} str={lol} />


        </div>
    );
};

export default Main;
//showMess={showMess} str={lol}