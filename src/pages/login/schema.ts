import * as Yup from 'yup';

export const schema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required()
})