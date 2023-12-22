import { useEffect, useState } from "react"

const UseEffect2 = () => {

    const [Data, setData] = useState([]);
    console.log(Data)
    useEffect(() => {
        async function getData() {
            alert("Hello")
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            if (data && data.length) {
                setData(data);
            }

            getData();
        }
    }, [])
    return (
        <>
            <ul>
                {
                    Data.map((item) => <li key={Math.random()}> {item.title} </li>)
                }
            </ul>
        </>
    )
}

export default UseEffect2