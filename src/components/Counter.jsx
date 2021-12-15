import { useEffect, useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    
    const add = () => {
        setCounter((prevState) => prevState + 1)
    }

    const reduce = () => {
        setCounter((prevState) => prevState - 1)
    }

    useEffect(() => {
        if(counter < 0) {
            alert("El contador no debe ser menor a 0. Reestableciendo valor...")
            setCounter(0)
        }
    }, [counter])

    return (
        <div>
            <p> {counter} </p>
            <div>
                <button onClick={add}> Aumentar </button>
                <button onClick={reduce}> Decrementar </button>
            </div>
            
        </div>
    )    
}

export default Counter