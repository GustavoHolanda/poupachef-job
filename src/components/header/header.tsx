import React from "react";
import Switch from "@material-ui/core/Switch";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import negativeLogo from "./../../assets/vectors/logo-negative.svg";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { logout } from '../../services/auth.service'
import { setTheme } from "../../store/config/config.store";

import "./style.scss";



function Header() {

    const dispatch = useAppDispatch();
    const history = useHistory();

    const themeStatus: boolean = useAppSelector(state => {
        return state.config.theme === 'light' ? false : true
    });

    const changeTheme = () => {
        const theme = themeStatus ? 'light' : 'dark';
        localStorage.setItem(`theme`, theme);
        dispatch(setTheme(theme));
    }

    const logoutApp = (): void => {
        logout();
        history.push('/');
    }

    return (
        <nav className="header">
            <img src={negativeLogo} alt="" onClick={() => history.push('/home')} />

            <div className="nav-actions">
                <div className="darkmode">
                    <Switch color="default" checked={themeStatus} onChange={changeTheme} />
                    <span>Darkmode</span>
                </div>
                <button onClick={logoutApp}>
                    <ExitToAppIcon />
                </button>
            </div>
        </nav>
    )
}

export default Header;