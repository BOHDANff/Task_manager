import React, {useEffect, useState} from 'react';
import {MyForm} from "../UI/MyForm/MyForm";
import {MyInput} from "../UI/MyInput";
import {MyFormButton} from "../UI/MyFormButton";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import {Link} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../../store/reducers/actionCreators/AuthActionCreator";
import BasicModal from "../UI/MyModal";
import {useNavigate} from "react-router-dom"

const SignInForm = (props) => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email("Email should have correct format")
            .required("This is a required field"),
        password: yup
            .string()
            .min(6, 'Password cannot be less than 6 characters')
            .required("This is a required field"),
    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    const {isAuth, user} = useSelector(state => state.auth)

    const onSubmit = (userData) => {
        dispatch(signIn(userData)).then((res) =>
        {if (res.error) {
            setErrorMessage(res.payload)
            handleOpen()
        }})
        reset()
    }

    useEffect(() => {
        if (isAuth) {navigate(`/tasks/${user.username}`, {replace: true})}
    }, [isAuth])

    return (<>
            <BasicModal open={open} onClose={handleClose}>{errorMessage}</BasicModal>
            <h1 style={{textAlign: "center"}}>Sign in</h1>
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
                    {...register('password')}
                    id="password"
                    type="password"
                    label="Your password"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                />
                <MyFormButton style={{width: "70%", margin: "16px 0 20px"}}>Sign in</MyFormButton>
                Don`t have the account?
                Please <Link onClick={() => props.setSignInOrUp("up")}>Sign up</Link>
            </MyForm>
        </>
    );
};

export default SignInForm;