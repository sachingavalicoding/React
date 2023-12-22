
const Basic = () => {


    const name = "Sachin Gavali ";
    const age = 19;
    const sum = (a, b) => a + b
    const a = 10;
    const b = 20
    return (
        <div className="main">
            <h1> My Name is {name} </h1>
            <h2>  Sum of {a} + {b} = {sum(a, b)} </h2>
            <h3> My age is {age} </h3>
        </div>


    )
}

export default Basic