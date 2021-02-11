import {call, put, all, takeLatest} from 'redux-saga/effects';
import {toast} from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* loginRequest({payload}){
    
    try{
        const response = yield call(axios.post,'/token',payload);
        
        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        
        const user = yield call(axios.get,`/users/email/${payload.email}`)
        
        yield put(actions.loginSuccess({...response.data, ...payload,user}));

        toast.success('Login realizado com sucesso!');

    }catch(error){
        toast.error('Usuário ou senha inválidos');
        yield put(actions.loginFailure());
    }
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest)]);