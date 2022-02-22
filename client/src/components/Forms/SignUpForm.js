import React, {useState} from 'react';
import {MyForm} from "../UI/MyForm/MyForm";
import {MyInput} from "../UI/MyInput";
import {MyFormButton} from "../UI/MyFormButton";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import {Link} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {signIn, signUp} from "../../store/reducers/actionCreators/AuthActionCreator";
import BasicModal from "../UI/MyModal";

const SignUpForm = (props) => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email("Email should have correct format")
            .required("This is a required field"),
        password: yup
            .string()
            .min(6, 'Password cannot be less than 6 characters')
            .required("This is a required field"),
        username: yup
            .string()
            .required("This is a required field"),
    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    const isAuth = useSelector(state => state.auth.isAuth)
    const onSubmit = (user) => {
        dispatch(signUp(user)).then((res) =>
        {if (res.error) {
            setErrorMessage(res.payload)
            handleOpen()
        }})
        reset()
    }
    return (isAuth
            ? <div>
                <h1>You have been sent the confirmation message on your email address.</h1>
                <h1 style={{marginTop: "20px"}}>Please go to your email and confirm it</h1>
            </div>
            : <>
                <BasicModal open={open} onClose={handleClose}>{errorMessage}</BasicModal>
                <h1 style={{textAlign: "center"}}>Sign up</h1>
                <MyForm onSubmit={handleSubmit(onSubmit)}>
                    <MyInput
                        {...register('email')}
                        id={'email'}
                        type={'text'}
                        label={'Your email'}
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                    />
                    <MyInput
                        {...register('username')}
                        id="username"
                        type="text"
                        label="Your username"
                        error={!!errors.username}
                        helperText={errors?.username?.message}
                    />
                    <MyInput
                        {...register('password')}
                        id="password"
                        type="password"
                        label="Your password"
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                    />
                    <MyFormButton style={{width: "70%", margin: "16px 0 20px"}}>Sign up</MyFormButton>
                    Already have the account?
                    Please <Link onClick={() => props.setSignInOrUp("in")}>Sign in</Link>
                </MyForm>
            </>
    )}

export default SignUpForm;