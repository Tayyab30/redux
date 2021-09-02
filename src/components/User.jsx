const User = ({ username, email, id, deleteUser }) => {
    return(
        <div>
            <p> username: { username }</p>
            <p> email: { email }</p>
            <button onClick={() => deleteUser(id)}>delete user</button>
        </div>
    )
}

export default User;