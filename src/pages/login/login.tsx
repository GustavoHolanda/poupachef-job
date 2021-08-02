import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { loginAction } from '../../store/auth/auth.store';
import logo from './../../assets/vectors/logo.svg';
import megativeLogo from './../../assets/vectors/logo-negative.svg';
import './style.scss';

import { Formik, Form, FormikHelpers } from 'formik';
import { schema } from './schema';
import Input from '../../components/custom-input';


const Login = () => {

    const loading = useAppSelector(state => state.auth.loading);
    const history = useHistory();
    const dispatch = useAppDispatch();


    const onSubmit = (values: ILogin, configs: FormikHelpers<ILogin>) => {
        dispatch(loginAction({ ...values, history }));
        configs.setSubmitting(false);
    }

    return (
        <div className="container">

            <div className="info-content">
                <div className="welcome">
                    <span> Welcome to the</span>
                    <img src={logo} alt="" />
                </div>
                <div className="supplies-image" />
            </div>

            <div className="form-content-login">

                <div className="form-header">
                    <img src={megativeLogo} alt="" />
                </div>

                {loading ?
                    (<div className="loading-content-login">
                        <CircularProgress />
                        <span>Logging in...</span>
                    </div>) :
                    (
                        <Formik
                            validationSchema={schema}
                            initialValues={{ username: '', password: '' }}
                            onSubmit={(values, configs) => onSubmit(values, configs)}>
                            {() => {
                                return (
                                    <Form className="form-login">
                                        <div className="form-title">
                                            LOGIN
                                        </div>

                                        <Input
                                            name="username"
                                            type="string"
                                            placeholder="Username/Email"
                                            className="full-input"
                                            autocomplete="on"
                                        />

                                        <Input
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            className="full-input"
                                            autocomplete="on"
                                        />

                                        <div className="form-action">
                                            <a href="https://www.figma.com/file/MNG3LDaK3HiPYSigglP9Va/Poupachef?node-id=0%3A1" target="_blank" rel="noreferrer"> Forget password?</a>

                                            <button type="submit">
                                                <span> Sign in </span>
                                                <ArrowRightAltIcon />
                                            </button>

                                        </div>

                                    </Form>
                                )
                            }}
                        </Formik>
                    )
                }
            </div>
        </div>
    )
}

interface ILogin {
    username: string,
    password: string;
}


export default Login;