import React, {FC} from 'react';

interface lol {
    change: React.MouseEventHandler<HTMLButtonElement>
}

const MyButton: FC<lol> = (props: lol) => {
    return (
        <div>
            <button onClick={props.change}>Show Alert</button>
        </div>
    );
};

export default MyButton;