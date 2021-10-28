import { useState } from "react";

type ButtonProps = {
    children?: number; //opcional
}

export function Button(props: ButtonProps){
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter( counter + 1 )
    }


    return (
        <button onClick={increment}>
            {counter}
        </button>
    );
}