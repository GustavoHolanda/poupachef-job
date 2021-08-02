import { createSelector } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const getFilteredSuppliers = createSelector((state: RootState) => state.supplier, (state) => {
    const suppliers = state.suppliers;
    const filter = state.filter.toLowerCase();
    if (!state.filter && suppliers.length > 0) return suppliers;
    return suppliers.filter((suppliers) => suppliers.cnpj.toLowerCase().includes(filter) || suppliers.name.toLowerCase().includes(filter))
});