

const Lists = () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const names = ['Sachin', 'Rahul', 'ketan', 'Mahesh', 'Om', "Ganesh"];
    const objs = [
        {
            id: 1,
            name: "sachin"
        },
        {
            id: 2,
            name: "sachin"
        },
        {
            id: 3,
            name: "sachin"
        },

    ]

    return (
        <ul style={{
            display: "flex",
            alignItems: "Center",
            gap: "20px"
        }}>
            {/*  Numbers Array  */}
            {/* {
                numbers.map((item) => <li> {item} </li>)

            } */}
            {/*  Names Array  */}
            {/* {
                names.map((item) => <li> {item} </li>)
            } */}

            {/*  Objects  */}
            {
                objs.map(({ id, name }) => <h2 key={id}> Id = {id} Name = {name} </h2>)
            }
        </ul>
    )
}

export default Lists