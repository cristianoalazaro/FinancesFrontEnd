import {call, put, all, takeLatest} from 'redux-saga/effects';

import * as userActions from './action';
import * as types from '../types';
import axios from '../../../services/axios';

function* getUser({payload}){
    try{
        console.log('pp ',payload);
        const user = yield call(axios.get, `/users/email/${payload.email}`);
        yield put(userActions.getUserSuccess({...user.data, payload}));
    } catch{
        
    }
}

export default all([
    takeLatest(types.GET_USER, getUser)
])