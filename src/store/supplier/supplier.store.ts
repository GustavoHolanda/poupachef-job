import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { History } from 'history';

import { RootState } from '../store';
import { ISupplier } from './../../models/supplier';

export interface SupplierState {
    suppliers: ISupplier[];
    loading: boolean,
    loadingDetail: boolean,
    filter: string,
    status: {
        status: 'error' | 'success' | null;
        message: string,
    },
    error: boolean
}

const statusInitialState = {
    status: null,
    message: ''
}

const initialState: SupplierState = {
    suppliers: [],
    loading: false,
    status: statusInitialState,
    loadingDetail: false,
    filter: '',
    error: false
}

export const supplierSlice = createSlice({
    initialState: initialState,
    name: 'auth',
    reducers: {
        getSuppliers: (state, action: PayloadAction<History>) => {
            state.loading = true;
        },
        getSuppliersSuccess: (state, action: PayloadAction<ISupplier[]>) => {
            state.suppliers = action.payload;
            state.loading = false;
        },
        setSupplierFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
        getSupplierDetail: (state, action: PayloadAction<{ id: string, history: History }>) => {
            state.loadingDetail = true;
        },
        getSupplierDetailSuccess: (state, action: PayloadAction<ISupplier>) => {
            state.loadingDetail = false
        },
        updateSupplier: (state, action: PayloadAction<{ supplier: ISupplier, history: History }>) => {
            state.loadingDetail = true
        },
        updateSupplierSuccess: (state, action: PayloadAction<ISupplier>) => {
            state.loadingDetail = false;
            state.status = { status: 'success', message: 'Supplier updated successfully!' };
            state.suppliers[state.suppliers.findIndex((supplier) => supplier.publicId === action.payload.publicId)] = action.payload;
        },
        createSupplier: (state, action: PayloadAction<{ supplier: ISupplier, history: History }>) => {
            state.loadingDetail = true
        },
        createSupplierSuccess: (state, action: PayloadAction<ISupplier>) => {
            state.loadingDetail = false;
            state.status = { status: 'success', message: 'Supplier created successfully!' };
            state.suppliers = [...state.suppliers, action.payload];
           
        },
        removeSupplier: (state, action: PayloadAction<{ id: string, history: History }>) => {
            const index = state.suppliers.findIndex(supplier => supplier.publicId === action.payload.id);
            state.suppliers[index].deleting = true;
        },
        removeSupplierSuccess: (state, action: PayloadAction<string>) => {
            state.suppliers = state.suppliers.filter((supplier) => supplier.publicId !== action.payload);
            state.status = { status: 'success', message: 'Supplier removed successfully!' };
        },
        supplierError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.loadingDetail = false;
            state.status = { status: 'error', message: action.payload };
        },
        cleanSupplierStatus: (state) => {
            state.status = statusInitialState;
        }
    }
})

export const {
    getSuppliers,
    getSuppliersSuccess,
    supplierError,
    setSupplierFilter,
    getSupplierDetail,
    getSupplierDetailSuccess,
    updateSupplier,
    updateSupplierSuccess,
    createSupplier,
    createSupplierSuccess,
    removeSupplier,
    removeSupplierSuccess,
    cleanSupplierStatus } = supplierSlice.actions;

export default supplierSlice.reducer

// selectors

export const getAllSuppliers = (state: RootState) => state.auth.loading;