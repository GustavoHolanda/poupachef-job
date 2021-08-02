import { call, put } from 'redux-saga/effects';
import { ISession } from '../../models/session';
import authApi from '../../services/auth.service';
import { loginError, loginSuccess } from './auth.store';


const authorization = {
    username: 'poupachef-test',
    password: 'dd3ed90e-667f-4248-a671-9266261dba5b'
}

export function* login(action: { type: any, payload: { username: string, password: string, history: any } }) {
    try {
        const response: { data: ISession } = yield call(authApi.post, '/oauth/token',
            prepareLoginFormData(action.payload), {
            auth: authorization,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        localStorage.setItem('token', response.data.access_token);
        action.payload.history.push('/home');
        yield put(loginSuccess(response.data))
    } catch (e) {
        yield put(loginError())
    }
}

const prepareLoginFormData = (payload: { username: string, password: string }): any => {
    const form = new FormData();
    form.append('grant_type', 'password');
    form.append('scope', 'web');
    form.append('password', payload.password);
    form.append('username', payload.username);
    return form;
}