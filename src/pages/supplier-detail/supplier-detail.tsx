import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { useHistory, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { useAppSelector } from '../../store/hooks';
import { createSupplier, updateSupplier } from '../../store/supplier/supplier.store';
import { RootState } from '../../store/store';
import { ISupplier } from '../../models/supplier';

import Input from '../../components/custom-input';
import Header from '../../components/header';


import { schema } from './schemas';
import './style.scss';


const SupplierDetail = () => {

    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const [mode, setMode] = useState<'post' | 'put'>('post');

    const [supplier, setSupplier] = useState<ISupplier>(initialState);

    useEffect(() => {
        if (location.state) {
            const supplier: ISupplier = location.state as ISupplier;
            setMode('put');
            setSupplier(supplier);
        }
    }, [location])

    const onSubmit = (supplier: ISupplier, actions: FormikHelpers<ISupplier>) => {
        if (mode === 'put') dispatch(updateSupplier({ supplier, history })); else dispatch(createSupplier({ supplier, history }))
    }
    const loading = useAppSelector((state: RootState) => state.supplier.loadingDetail);


    return <>
        <Header />
        <div className="content">
            <Formik
                validationSchema={schema}
                enableReinitialize={true}
                initialValues={supplier}
                onSubmit={(values, actions) => onSubmit(values, actions)}>
                {({ errors }) => {
                    return <Form>
                        <div className="form-content">
                            <div className="form-header">
                                <h1 className='primary-title'> SUPPLIER  DETAILS</h1>
                            </div>
                            <div className="form-body">
                                <Input
                                    name="name"
                                    type="string"
                                    placeholder="Name"
                                    className="big-input"
                                    disabled={loading}
                                />
                                <Input
                                    name="cnpj"
                                    type="string"
                                    placeholder="CNPJ"
                                    className="medium-input"
                                    mask="99.999.999/9999-99"
                                    disabled={loading}
                                />
                                <Input
                                    name="phoneNumber"
                                    type="tel"
                                    placeholder="Phone number"
                                    className="medium-input"
                                    mask="+99 (99) 99999-9999"
                                    disabled={loading}
                                />
                            </div>
                        </div>
                        <div className="form-content">
                            <div className="form-header">
                                <h1 className='secondary-title'> OWNERS INFO</h1>
                            </div>
                            <div className="form-body">
                                <Input
                                    name="ownerName"
                                    type="string"
                                    placeholder="Name"
                                    className="big-input"
                                    disabled={loading}
                                />
                                <Input
                                    name="ownerEmail"
                                    type="email"
                                    placeholder="Email"
                                    className="medium-input"
                                    disabled={loading}
                                />
                                <Input
                                    name="ownerPhoneNumber"
                                    type="tel"
                                    placeholder="Phone number"
                                    className="medium-input"
                                    mask="+99 (99) 99999-9999"
                                    disabled={loading}
                                />
                            </div>
                        </div>
                        <div className="form-content">
                            <div className="form-header">
                                <h1 className='secondary-title'> ADDRESS</h1>
                            </div>
                            <div className="form-body">
                                <Input
                                    name="address"
                                    type="string"
                                    placeholder="Address"
                                    className="half-input"
                                    disabled={loading}
                                />
                                <Input
                                    name="number"
                                    type="number"
                                    placeholder="Number"
                                    className="small-input"
                                    disabled={loading}
                                />
                                <Input
                                    name="complement"
                                    type="string"
                                    placeholder="Complement"
                                    className="small-input"
                                    disabled={loading}
                                />
                                <Input
                                    name="neighborhood"
                                    type="string"
                                    placeholder="Neighborhood"
                                    className="small-input"
                                    disabled={loading}
                                />

                                <Input
                                    name="state"
                                    type="string"
                                    placeholder="State"
                                    className="super-small-input"
                                    disabled={loading}
                                />
                                <Input
                                    name="city"
                                    type="string"
                                    placeholder="city"
                                    className="small-input"
                                    disabled={loading}
                                />
                                <Input
                                    name="zipCode"
                                    type="string"
                                    placeholder="ZIP code"
                                    className="small-input"
                                    mask="99999-999"
                                    disabled={loading}
                                />
                            </div>
                        </div>
                        <button className="fab-button" type="submit">
                            <span> SUBMIT</span>
                            <ArrowRightAltIcon />
                        </button>

                    </Form>
                }}
            </Formik>
        </div>

    </>
}

export default SupplierDetail;

const initialState: ISupplier = {
    publicId: '',
    name: '',
    cnpj: '',
    phoneNumber: '',
    ownerEmail: '',
    ownerName: '',
    ownerPhoneNumber: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    zipCode: ''
}