import {call, put, all, takeLatest} from 'redux-saga/effects';

import * as userActions from './action';
import * as types from '../types';
import axios from '../../../services/axios';

function* getUser({payload}){
    try{
        const user = yield call(axios.get, `/users/email/${payload.email}`);
        //console.log('user ',user.data);
        yield put(userActions.getUserSuccess({...user.data, payload}));
    } catch{
        
    }
}

export default all([
    takeLatest(types.GET_USER, getUser)
])