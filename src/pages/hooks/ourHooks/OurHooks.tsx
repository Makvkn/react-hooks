import React, {useEffect, useState} from 'react';

function useLogger(value: any) {
    useEffect(() => {
        console.log('value change', value)
    }, [value])
}

function useInput(initialValue: any) {
    const [value, setValue] = useState(initialValue)

    const onChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setValue(event.target.value)
    }
    const clear = () => {
        setValue('')
    }

    return {
       bind: { value, onChange},
        value,
        clear
    }
}

const OurHooks = () => {

// От этого мы избавились благодаря хуку
    // const [name, setName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement> )=> {
    //     setName(event.target.value)
    // }
    //
    // const lastNameHandler = (event: React.ChangeEvent<HTMLInputElement> )=> {
    //     setLastName(event.target.value)
    // }

    const input = useInput('')
    const lastName = useInput('')
    useLogger(input.value)

    return (
        <div>
            {/*<input type="text" value={input.value} onChange={input.onChange}/>*/}
            <input type="text" {...input.bind}/>
            <input type="text" {...lastName.bind}/>

            <button onClick={() => {input.clear()}}>Очистить</button>
            {/* 42 тоже самое, что и 41 только сокращенное*/}
            <hr />
            {/*<input type="text" value={lastName} onChange={lastNameHandler}/>*/}
            <h1>{input.value}</h1>
            <h1>{lastName.value}</h1>
        </div>
    );
};

export default OurHooks;