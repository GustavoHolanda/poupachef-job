import { all, takeLatest } from 'redux-saga/effects';
import { login } from './auth/auth.saga';
import { loginAction } from './auth/auth.store';
import { deleteSupplier, getAllSuppliers, getDetailSupplier, postSupplier, putSupplier } from './supplier/supplier.saga';
import { createSupplier, getSupplierDetail, getSuppliers, removeSupplier, updateSupplier } from './supplier/supplier.store';

export default function* rootSaga(): any {
    return yield all([
        takeLatest(loginAction, login),
        takeLatest(getSuppliers, getAllSuppliers),
        takeLatest(getSupplierDetail, getDetailSupplier),
        takeLatest(updateSupplier, putSupplier),
        takeLatest(createSupplier, postSupplier),
        takeLatest(removeSupplier, deleteSupplier),
    ])
}


