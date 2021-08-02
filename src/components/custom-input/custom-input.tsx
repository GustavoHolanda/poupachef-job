import React from "react";
import "./style.scss";
import InputMask from 'react-input-mask';
import { useField } from 'formik';

const Input = (props: ComponentProps) => {
    const mask: string = props.mask ? props.mask : '';
    const [inputProps, meta] = useField(props);
    return (
        <div className={`field-content ${props.className}`}>
            <InputMask className={`input ${meta.touched && meta.error ? 'input-error' : ''}`}
                {...inputProps}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                disabled={props.disabled}
                autoComplete={props.autocomplete}
                mask={mask}
            />
            <label htmlFor={props.name} className="label-error"> {meta.touched && meta.error}</label>
        </div>
    )
}


interface ComponentProps {
    name: string;
    type: string;
    placeholder: string;
    mask?: string;
    className?: string;
    disabled?: boolean;
    autocomplete?: 'on' | 'off'
}

export default Input;