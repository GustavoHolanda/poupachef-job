export interface IFields {
    key: string;
    size: 'super-small-input' | 'small-input' | 'half-input' | 'medium-input' | 'big-input';
    placeholder: string;
    type: 'text' | 'tel' | 'number' | 'email' | 'password' | 'url',
    mask?: any,
    value?: any
}