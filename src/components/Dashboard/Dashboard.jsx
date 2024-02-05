

function Dashboard(props) {
    
    return (
        <>
            <h2>Welcome, {props.user.username}!</h2>
            <p>Your ID is: {props.user.id}</p>
        </>
    )
}

export default Dashboard