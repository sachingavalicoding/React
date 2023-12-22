import { useState } from "react";

const UseState = () => {
    const [name, setName] = useState("Sachin Gavali");
    const nameHandle = () => {
        setName("Rahul mehara ");
    }
    return (
        <>
            <h1> Name is {name} </h1>
            <button onClick={nameHandle}> Change Name </button>
        </>
    )
}

export default UseState