import * as yup from 'yup';

export const formSchema = yup.object({
    fullName: yup.string().min(2).max(25).required('please enter your Full name'),
    email: yup.string().email('invalid email').required('email required'),
    phone: yup.string().min(10).required('phone is required'),
});