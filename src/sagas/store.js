import { createStore, applyMiddleware } from 'redux';
import { takeLatest, all } from 'redux-saga/effects';
import { reducer } from './../reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import Constants from './../Constants';
import { fetchOrganizations, fetchOrganization, addNewOrganization } from './organization';

function* getOrganizations() {
	yield takeLatest(Constants.GET_ORGANIZATIONS, fetchOrganizations)
}

function* addOrganization() {
	yield takeLatest(Constants.ADD_ORGANIZATION, addNewOrganization)
}

function* getOrganization() {
	yield takeLatest(Constants.GET_ORGANIZATION, fetchOrganization)
}

export function* rootSaga() {
	yield all([
		getOrganizations(),
		addOrganization(),
		getOrganization()
	]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
