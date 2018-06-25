import { all, put, takeEvery } from 'redux-saga/effects';
import { create } from 'apisauce';

const api = create({
  baseURL: 'https://sherpa-careers-assessment.appspot.com/api'
});

api.setHeader('authentication', 'howdy');

function* bmiFetch(payload) {
  try {
    const { data } = payload;
    const res = yield api.post(`/calculateBMI`, data);

    res.status < 400
      ? yield put({ type: 'BMI_FETCH_SUCCESS', data: { ...res.data } })
      : yield put({ type: 'BMI_FETCH_ERROR' });
  } catch (error) {
    console.log(error);
  }
}

function* watchBMIFetch() {
  yield takeEvery('BMI_FETCH', bmiFetch);
}

function* rangeFetch() {
  try {
    const res = yield api.get(`/BMIRange`);

    res.status < 400
      ? yield put({
          type: 'RANGE_FETCH_SUCCESS',
          data: { ...res.data.data.bmi_range }
        })
      : yield put({ type: 'RANGE_FETCH_ERROR' });
  } catch (error) {
    console.log(error);
  }
}

function* watchRangeFetch() {
  yield takeEvery('RANGE_FETCH', rangeFetch);
}

export default function* rootSaga() {
  yield all([watchBMIFetch(), watchRangeFetch()]);
}
