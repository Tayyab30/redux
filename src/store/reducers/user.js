const initial_state = [
    {   
        id: 1,
        username: 'test',
        email: 'test@email.com',
        password: 'password',
        confirmPassword: 'password'
    }
]

const users = (state = initial_state, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return [
                ...state,
                action.payload
            ]
        case 'DELETE_USER':
            const users = state.filter(user => user.id !== action.payload);
            return users
        default:
            return state
    }
}

export default users;