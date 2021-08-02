import * as Yup from 'yup';


export const schema = Yup.object({
    name: Yup.string().required(),
    cnpj: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    ownerName: Yup.string().required(),
    ownerEmail: Yup.string().required(),
    ownerPhoneNumber: Yup.string().required(),
    address: Yup.string().required(),
    number: Yup.number().required(),
    complement: Yup.string(),
    neighborhood: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    zipCode: Yup.string().required(),
})


export interface ISupplier {
    publicId: string;
    name: string;
    cnpj: string;
    phoneNumber?: string;
    zipCode?: string;
    address?: string;
    number?: string;
    complement?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    ownerName: string;
    ownerEmail?: string;
    ownerPhoneNumber?: string;
}
