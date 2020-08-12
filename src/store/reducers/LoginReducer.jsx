

export default function LoginReducer(state = {
    totalCount: 0, message: '', error: ''
}, action) {
    let newState;
    switch (action.type) {
        case 'LOGIN_SUBMIT':
            newState = Object.assign({}, state, {
                LoginData: action.payload,
            });
            return newState;

        case 'LOG_OUT':
            newState = Object.assign({}, state, {
                LoginData: '',
            });
            return newState;
        
         default:
            return state;
    }
}