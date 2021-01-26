import {call, put, all, takeLatest} from 'redux-saga/effects';

import * as actions from './actions';
import * as types from '../types';

const requisition = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
    },600);
});

function* exampleRequest(){
    try{
        yield call(requisition);
        yield put(actions.clicaBotaoSuccess());
    }catch{
        yield put(actions.clicaBotaoFailure());
    }
}

export default all([
    takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest),
])