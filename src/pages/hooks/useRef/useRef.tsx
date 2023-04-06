import React, {useRef} from 'react';

const UseRef = () => {
    const inputEl = useRef<HTMLInputElement>(null)
    const onButtonClick = () => {
        // `current` указывает на смонтированный элемент `input`
        if (inputEl.current != null) {
            inputEl.current.focus()
        }
    }
    return (
        <>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>
                Установить фокус на поле ввода
            </button>
        </>
    )
};

export default UseRef;