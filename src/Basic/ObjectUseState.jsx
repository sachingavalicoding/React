import { useState } from "react"

const ObjectUseState = () => {
    const [student, setStudent] = useState({ name: "Sachin", age: 19, male: true, });
    const ChangeAge = () => {
        setStudent({
            ...student,
            age: 250
        });
    }

    return <>
        {
            <h1> Name {student.name} Age {student.age} male {student.male} </h1>
        }
        <button onClick={ChangeAge}> Change Age </button>
    </>
}

export default ObjectUseState