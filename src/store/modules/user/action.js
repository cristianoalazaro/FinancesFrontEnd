import * as types from '../types';

export function getUser(payload){
    return {
        type: types.GET_USER,
        payload,
    }
}

export function getUserSuccess(payload){
    return {
        type: types.GET_USER_SUCCESS,
        payload,
    }
}

// export function logout(){
//     return {
//         type: types.LOGOUT,
//     }
// }