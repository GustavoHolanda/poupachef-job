import React from "react";

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import EditIcon from '@material-ui/icons/Edit';
import { ISupplier } from "../../models/supplier";
import { CircularProgress } from '@material-ui/core'

import "./style.scss";


function SupplierCard(props: { supplier: ISupplier, onClick: (type: 'edit' | 'delete', id: string) => any }) {

    const supplier: ISupplier = props.supplier;

    return (
        <div className="supplier-card">
            <div className="supplier-card-header">
                <h2> {supplier.name}</h2>
                <span>{supplier.cnpj} </span>
            </div>
            <div className="supplier-card-body">
                <div className="supplier-owner">
                    <span>{supplier.ownerName}</span>
                </div>
                <li>
                    <span>{supplier.phoneNumber}</span>
                </li>
            </div>
            <div className="supplier-card-footer">
                <button onClick={() => props.onClick('delete', supplier.publicId)}>
                    <span>DELETE</span>
                    <DeleteOutlineIcon />
                </button>
                <button onClick={() => props.onClick('edit', supplier.publicId)}>
                    <span>EDIT</span>
                    <EditIcon />
                </button>
            </div>
            {
                supplier.deleting && <div className="deleting-supplier">
                    <div className="loading-content">
                        <CircularProgress />
                        <span>Deliting supplier...</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default SupplierCard;