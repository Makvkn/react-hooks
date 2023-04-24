import React from 'react';

interface alert {
    mess: boolean;
    str: string;
}


const MyAlert = (props: alert) => {
    return (
        <div>
            <h1>{props.mess ? props.str : null}</h1>
        </div>
    );
};

export default MyAlert;