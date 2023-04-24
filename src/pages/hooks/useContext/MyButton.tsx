import React, {FC, useContext} from 'react';
import {MessContextProvider, MessContext} from "./Context";

interface lol {
    change: React.MouseEventHandler<HTMLButtonElement>;
}

const MyButton: FC = () => {

    const butt = useContext<any>(MessContext)

    return (
        <div>
            <button onClick={butt.changeMess}>Show Alert</button>
        </div>
    );
};

export default MyButton;