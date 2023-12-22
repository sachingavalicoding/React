import { useState } from "react"

const ArrayUseState = () => {
    const [name, setName] = useState(["Sachin", "Nayan"]);
    const addOne = () => {
        setName([...name, "Vishal"])
    }

    const removeOne = () => {
        setName(name.filter((f) => f !== "Vishal"))
    }

    const updateOne = () => {
        setName(name.map((f) => f === "Sachin" ? "Ganesh" : f))
    }
    return (
        <>
            <ul>
                <h1> All  {name.length} Students Name Are </h1>
                {
                    name.map((item) => <li> {item} </li>)
                }
            </ul>
            <button onClick={addOne}> Add Student </button>
            <button onClick={removeOne}> remove Student </button>
            <button onClick={updateOne}> Update Student </button>
        </>
    )
}

export default ArrayUseState