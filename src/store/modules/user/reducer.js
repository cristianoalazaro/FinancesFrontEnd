import * as types from '../types';

const initial_state = {
    user:{},
}

export default function reducer(state = initial_state, action){
    switch (action.type){
        case types.GET_USER_SUCCESS:{
            const newState = {...state};
            newState.name = action.payload.name;
            newState.lastname = action.payload.lastname;
            console.log('ns ',newState);
            return newState;
        }
        case types.LOGOUT:{
            return state;
        }
        default:{
            return initial_state;
        }
    }
}