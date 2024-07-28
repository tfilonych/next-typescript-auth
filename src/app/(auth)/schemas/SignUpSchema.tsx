import * as yup from 'yup';

const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  username: yup.string().required('Name is required'),
});

export default SignUpSchema;
