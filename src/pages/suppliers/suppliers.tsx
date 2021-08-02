import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';


import { CircularProgress } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

import FabButton from '../../components/fab-button';
import Header from '../../components/header';
import { RootState } from '../../store/store';
import { getFilteredSuppliers, useAppDispatch, useAppSelector } from '../../store/hooks';
import { ISupplier } from '../../models/supplier';
import './style.scss';
import SupplierCard from '../../components/supplier-card';
import { getSuppliers, setSupplierFilter, getSupplierDetail, removeSupplier } from '../../store/supplier/supplier.store';
import FindInPageTwoTone from '@material-ui/icons/FindInPageTwoTone';
import { useSelector } from 'react-redux';


const Suppliers = () => {

    const history = useHistory();
    const dispath = useAppDispatch();

    useEffect(() => {
        dispath(getSuppliers(history));
    }, [dispath, history]);

    const suppliers: ISupplier[] = useSelector(getFilteredSuppliers);
    const loading: boolean = useAppSelector((state: RootState) => state.supplier.loading);

    const handlerSupplier = (type: 'edit' | 'delete', id: string) => {
        if (type === 'edit') dispath(getSupplierDetail({ id, history })); else dispath(removeSupplier({ id, history }))
    }

    const goTo = () => {
        history.push('/supplier-detail');
    }

    return <>
        <Header></Header>

        <div className="content">

            <div className="suppliers-header">
                <h1> MY SUPPLIERS </h1>
                <div className="search-content">
                    <SearchIcon />
                    <input
                        type="email"
                        onChange={(e) => dispath(setSupplierFilter(e.target.value))}
                        placeholder="Search by company name or CNPJ...">
                    </input>
                </div>
            </div>

            {loading ?

                (<div className="loading-content">
                    <CircularProgress />
                    <span>Getting suppliers...</span>
                </div>) :

                (<div className="suppliers-body">
                    {suppliers.length > 0 ?

                        suppliers.map((supplier, index) => {
                            return <SupplierCard key={index} supplier={supplier} onClick={(type, id) => handlerSupplier(type, id)} />
                        }) :

                        <div className="no-suppliers">
                            <FindInPageTwoTone />
                            <span> No Suppliers found </span>
                        </div>
                    }
                </div>)
            }

            <FabButton label="NEW SUPPLIER" icon={<AddIcon />} onClick={goTo} />
        </div>
    </>
}

export default Suppliers;

