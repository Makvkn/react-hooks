import React, {useState} from 'react';
import MyButton from "./MyButton";
import MyAlert from "./MyAlert";
import {MessContextProvider} from "./Context";

const Main = () => {




    return (
        <MessContextProvider>
    <div>
        <MyButton />
        <MyAlert />
    </div>
        </MessContextProvider>
);
};

export default Main;
//showMess={showMess} str={lol}