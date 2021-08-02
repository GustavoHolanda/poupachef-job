import React from "react";

import { Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab'

import { cleanAuthStatus } from '../../store/auth/auth.store';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

import { cleanSupplierStatus } from "../../store/supplier/supplier.store";


const SnackbarControl = () => {

    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(cleanAuthStatus());
        dispatch(cleanSupplierStatus());
    }

    const snackConfig: SnackConfig = useAppSelector((state: RootState) => {
        const authStatus = state.auth.status;
        const supplierStatus = state.supplier.status;
        if (authStatus.status === 'error') return { opened: true, status: 'error', message: authStatus.message };
        if (supplierStatus.status === 'error') return { opened: true, status: 'error', message: supplierStatus.message };
        if (authStatus.status === 'success') return { opened: true, status: 'success', message: authStatus.message };
        if (supplierStatus.status === 'success') return { opened: true, status: 'success', message: supplierStatus.message };
        return { opened: false, status: 'success', message: '' };
    });

    return (
        <Snackbar open={snackConfig.opened} autoHideDuration={5000} onClose={handleClose} >

            <Alert action={
                <button onClick={handleClose}>
                    OK
                </button>
            }
                severity={snackConfig.status}>
                <AlertTitle>{snackConfig.status && snackConfig.status.toUpperCase()}</AlertTitle>
                {snackConfig.message}
            </Alert>
        </Snackbar>)

}

interface SnackConfig {
    opened: boolean;
    status: 'success' | 'info' | 'warning' | 'error';
    message: string
}

export default SnackbarControl;