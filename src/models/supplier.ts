export interface ISupplier{
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
    deleting?: boolean;
}