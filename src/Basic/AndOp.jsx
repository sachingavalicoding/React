

const AndOp = () => {
    const student = ['sachin', 'nayan', 'mahesh', 'vishal', 'sachin', 'nayan', 'mahesh', 'vishal'];
    return (
        <>
            <h1> Our Student's </h1>
            {student.length > 0 && <h2> Total Student's We Have {student.length} </h2>}
            <ul>

                {
                    student.map((item) => <li key={Math.random()} > {item} </li>)
                }
            </ul>
        </>
    )
}

export default AndOp