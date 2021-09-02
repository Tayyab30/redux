const AddUser = ({ addUser, handleChange }) => {
    return(
        <>
            <input type='text' name='username' onChange={handleChange} placeholder="Name" />
            <input type='text' name='email' onChange={handleChange} placeholder="E-mail" />
            <button type='button' onClick={addUser}> Add new User </button>
        </>
    )
}

export default AddUser;