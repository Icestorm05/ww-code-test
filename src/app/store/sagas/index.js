import { all } from 'redux-saga/effects';
import ni from "./ni";

export default function* rootSaga() {
  yield all([
    ni()
  ]);
}
