import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { api } from '../../../services/api';
import * as actions from './actions';
import types from '../types';

function* auth({ payload }: any): any {
  const { history, phone, setLoading } = payload;
  setLoading(true);

  try {
    const response = yield call(api.post, '/login', { phone });
    yield put(actions.loginSuccess(response.data));

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    toast.success('Seja bem vindo!');
    history.push('/form-post');
  } catch (e: any) {
    toast.error(e.response.data.error);
    yield put(actions.loginFailure());
  } finally {
    setLoading(false);
  }
}

function persistRehydrate({ payload }: any) {
  const token = get(payload, 'authReducer.token', '');
  if (!token) return;
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([takeLatest(types.LOGIN_REQUEST, auth), takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)]);
