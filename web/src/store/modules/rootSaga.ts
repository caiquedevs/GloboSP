import { all } from 'redux-saga/effects';
import authSagas from './auth/sagas';

export default function* rootSaga(): any {
  return yield all([authSagas]);
}
