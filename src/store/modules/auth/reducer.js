import * as types from '../types';

const initialState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            const newState = { ...state };
            newState.isLoggedIn = true;
            newState.token = action.payload.token;
            newState.user.name = action.payload.user.data.name;
            newState.user.lastname = action.payload.user.data.lastname;
            newState.user.email = action.payload.user.data.email;
            newState.isLoading = false;
            return newState;
        }
        case types.LOGIN_FAILURE: {
            return initialState;
        }
        case types.LOGIN_REQUEST: {
            const newState = { ...state };
            newState.isLoading = true;
            return newState;
        }
        default:
            return state;
    }
}