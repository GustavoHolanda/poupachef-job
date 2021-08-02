import { logout } from './../../services/auth.service';
import { ISupplier } from './../../models/supplier';
import { call, put } from 'redux-saga/effects';

import authApi from '../../services/auth.service';
import { getSuppliersSuccess, supplierError, getSupplierDetailSuccess, updateSupplierSuccess, createSupplierSuccess, removeSupplierSuccess } from './supplier.store';
import { PayloadAction } from '@reduxjs/toolkit';
import { History } from 'history';


export function* getAllSuppliers(action: PayloadAction<History>) {
    const token = localStorage.getItem('token');
    try {
        const response: { data: ISupplier[] } = yield call(authApi.get, '/suppliers', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        yield put(getSuppliersSuccess(response.data))
    } catch (error) {
        checkInvalidToken(error.response.data, action.payload);
        yield put(supplierError('There was an error trying to get all suppliers'))
    }
}

export function* getDetailSupplier(action: PayloadAction<{ id: string, history: History }>) {
    const token = localStorage.getItem('token');
    try {
        const response: { data: ISupplier } = yield call(authApi.get, `/suppliers/${action.payload.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        action.payload.history.push('supplier-detail', response.data)
        yield put(getSupplierDetailSuccess(response.data))
    } catch (error) {
        checkInvalidToken(error.response.data, action.payload.history);
        yield put(supplierError('There was an error trying to get supplier detail'));
    }
}

export function* putSupplier(action: PayloadAction<{ supplier: ISupplier, history: History }>) {
    const token = localStorage.getItem('token');
    try {
        const response: { data: ISupplier } = yield call(authApi.put, `/suppliers`, action.payload.supplier, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        action.payload.history.push('/home');
        yield put(updateSupplierSuccess(response.data))
    } catch (error) {
        checkInvalidToken(error.response.data, action.payload.history);
        yield put(supplierError('There was an error trying to update supplier'))
    }
}

export function* postSupplier(action: PayloadAction<{ supplier: ISupplier, history: History }>) {
    const token = localStorage.getItem('token');
    try {
        const response: { data: ISupplier } = yield call(authApi.post, `/suppliers`, action.payload.supplier, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        action.payload.history.push('/home');
        yield put(createSupplierSuccess(response.data))
    } catch (error) {
        checkInvalidToken(error.response.data, action.payload.history);
        yield put(supplierError('There was an error trying to create a new supplier'))
    }
}

export function* deleteSupplier(action: PayloadAction<{ id: string, history: History }>) {
    const token = localStorage.getItem('token');
    try {
        const response: { data: { publicId: string } } = yield call(authApi.delete, `/suppliers/${action.payload.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        yield put(removeSupplierSuccess(response.data.publicId))
    } catch (error) {
        checkInvalidToken(error.response.data, action.payload.history);
        yield put(supplierError('There was an error trying to remove a supplier'))
    }
}

function checkInvalidToken(error: { error: string, error_description: string }, history: History) {
    if (error && error.error === 'invalid_token') {
        logout();
        history.push('/');
    }
}




