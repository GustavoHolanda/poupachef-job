import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import authReducer from './auth/auth.store';
import configReducer from './config/config.store';
import supplierReducer from './supplier/supplier.store';

import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
    reducer: {
        auth: authReducer,
        config: configReducer,
        supplier: supplierReducer
    },
    middleware: [
        sagaMiddleware
    ],
    devTools: true
});

sagaMiddleware.run(rootSaga);



export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;