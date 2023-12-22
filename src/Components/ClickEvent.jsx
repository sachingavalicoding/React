
const handleClick = (a, b) => {
    alert(` Sum  = ${a + b}`)
    console.log(a * b);
    a = a * b;

}
const ClickEvent = () => {
    return (
        <>
            <button onClick={() => handleClick(10, 20)}>
                Click
            </button>
        </>
    )
}

export default ClickEvent