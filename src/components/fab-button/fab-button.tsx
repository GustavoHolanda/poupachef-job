import React from "react";
import "./style.scss";


const FabButton = (props: { label: string, icon: any, onClick?: (e: any) => any, type?: "button" | "submit" | "reset" | undefined }) => {

    const handlerClick = (e: any) => {
        e.preventDefault();
        if(props.onClick) props.onClick(e);
    }

    return (
        <button className="fab-button" type={props.type} onClick={handlerClick}>
            <span> {props.label}</span>
            {props.icon}
        </button>
    )

}

export default FabButton;