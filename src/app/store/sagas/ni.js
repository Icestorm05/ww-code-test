import { put, select, takeLatest } from 'redux-saga/effects';

/**
 * Perform an XHR to the API to calculate the national insurance, given an income and date.
 * @param {date: Date, income: number} args
 * @return {Promise<string>}
 */
function getNI({ date, income }) {
  return fetch('/v1/national-insurance', {
    method: 'post',
    body: JSON.stringify({ income }),
    headers: {
      'Content-Type': 'application/json',
      'x-run-date': date
    }
  }).then(async res => {
    // Return the NI value if XHR sent back a successful response code.
    if (res.ok) {
      const json = await res.json();
      return json.ni;
      // Return the error message if XHR sent back an unsuccesful response code.
    }
    const html = await res.text();
    const err = new DOMParser().parseFromString(html, 'text/html').querySelector('pre').firstChild
      .textContent;
    throw new Error(err);
  });
}

/**
 * Calculates the national insurance.
 * @return {PutEffect}
 */
function* calcNI() {
  // Grab the income from the state.
  const income = (yield select(state => state.income)) || '0';

  // Create two dates. One for the current date, and another for the current date a year ago.
  const prevDate = new Date();
  const currDate = new Date();
  prevDate.setFullYear(prevDate.getFullYear() - 1);

  try {
    // Calculate the NI's simultaneously.
    const [prev, curr] = yield Promise.all([
      getNI({ date: prevDate.toISOString().split('T')[0], income }),
      getNI({ date: currDate.toISOString().split('T')[0], income })
    ]);

    // Emit the SET_NI action with the results.
    yield put({ type: 'SET_NI', ni: { prev: parseFloat(prev), curr: parseFloat(curr) } });
  } catch (err) {
    // Emit the SET_ERR action with the error message.
    yield put({ type: 'SET_ERR', err: err.message });
  }
}

/**
 * Watches for CALC_NI actions, only returning the latest value if multiple actions are emitted at the same time.
 */
export default function* actionWatcher() {
  yield takeLatest('CALC_NI', calcNI);
}
