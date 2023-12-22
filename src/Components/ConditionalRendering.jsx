const ValidPassword = () => <h1> Valid Password </h1>
const InvalidPassword = () => <h1> Password is Invalid  </h1>

const Password = ({ isValid }) => {
    if (isValid) {
        return <ValidPassword />
    }
    else {
        return <InvalidPassword />
    }
}

const ConditionalRendering = () => {
    return (
        <>
            <Password isValid={true} />
        </>
    )
}

export default ConditionalRendering