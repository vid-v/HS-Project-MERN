import { put } from 'redux-saga/effects';
import axios from 'axios';

import config from './../config';
import Constants from '../Constants'

export function* fetchOrganizations() {
  const data = yield axios(`${config.baseUrl}/organizations`)
    .then(response => {
      return response.data
    }, (error) => {
      return error.message
    });

  yield put({ type: Constants.ORGANIZATIONS_RECEIVED, forms: data });
}

export function* fetchOrganization(action) {
  console.log('----------test---------', action);

  const data = yield axios(`${config.baseUrl}/organizations/${action.orgId}`)
    .then(response => {
      return response.data
    }, (error) => {
      return error.message
    });

  yield put({ type: Constants.ORGANIZATION_RECEIVED, form: data });
}

export function* addNewOrganization(action) {
  const data = yield axios.post(`${config.baseUrl}/organizations`, action.param)
    .then(response => {
      return response.data
    }, (error) => {
      return error.message
    });

  yield put({ type: Constants.ORGANIZATION_ADDED, form: data });
}
