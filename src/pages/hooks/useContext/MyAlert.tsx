import React, {useContext} from 'react';
import {MessContext} from "./Context";

interface alert {
    mess: boolean;
    str: string
}


const MyAlert = () => {

    const message = useContext(MessContext)

    return (
        <div>
            <h1>{message.showMess ? message.meStr : null}</h1>
        </div>
    );
};

export default MyAlert;