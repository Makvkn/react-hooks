import React, {useContext, useReducer, useState} from 'react';
import "../../App.css"
import MenuItem from "./MenuItem";

const Menu = () => {

    const [menuItem, setMenuItem] = useState<string[]>(["useState", "useEffect", "useRef", "useMemo", "UseCallback", "useContext", "useReducer", "OurHooks"])

    return (
        <div>
            <div className="App-menu">
                {menuItem.map((item, index) =>
                    <MenuItem string={item} address={index} key={index}/>
                )}
            </div>
        </div>
    );
};

export default Menu;
