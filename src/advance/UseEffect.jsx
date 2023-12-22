import { useEffect, useState } from "react"
const UseEffect = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        document.title = `UseEffect ${value} `
    }, [value])

    return (
        <>
            <h1> {value} </h1>
            <button onClick={() => setValue(value + 1)}> Change Value </button>
        </>
    )
}

export default UseEffect