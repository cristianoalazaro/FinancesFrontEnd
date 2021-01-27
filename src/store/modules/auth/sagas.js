import {call, put, all, takeLatest} from 'redux-saga/effects';
import {toast} from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';


function* loginRequest({payload}){
    try{
        const response = yield call(axios.post,'/token',payload);
        yield put(actions.loginSuccess({...response.data, payload}));

        toast.success('Login realizado com sucesso!');

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    }catch(error){
        toast.error('Usuário ou senha inválidos');
        yield put(actions.loginFailure());
    }
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest)]);