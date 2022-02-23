import React from 'react';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {MyForm} from "../UI/MyForm/MyForm";
import {MyInput} from "../UI/MyInput";
import {MyFormButton} from "../UI/MyFormButton";

const CreateForm = () => {
    const schema = yup.object().shape({
        title: yup
            .string()
            .required("This is a required field"),
        description: yup
            .string()
            .required("This is a required field"),
        priority: yup
            .number()
            .required("This is a required field"),
        dueDate: yup
            .string()
            .required("This is a required field"),
    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })

    const onSubmit = (task) => {
      reset()
    }
    return (
        <>
            <h1 style={{textAlign: "center"}}>Create task</h1>
            <MyForm onSubmit={handleSubmit(onSubmit)}>
                <MyInput
                    {...register('title')}
                    id={'title'}
                    type={'text'}
                    label={'Title'}
                    error={!!errors.title}
                    helperText={errors?.title?.message}
                />
                <MyInput
                    {...register('description')}
                    id="description"
                    type="password"
                    label="Description"
                    multiline
                    rows={4}
                    error={!!errors.description}
                    helperText={errors?.description?.message}
                    inputProps={{
                        maxLength: 300
                    }}
                />
                <MyInput
                    {...register('priority')}
                    id={'priority'}
                    type={'number'}
                    label={'Priority'}
                    error={!!errors.priority}
                    helperText={errors?.title?.priority}
                />
                <MyInput
                    {...register('dueDate')}
                    id={'dueDate'}
                    type={'date'}
                    label={'Due date'}
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.dueDate}
                    helperText={errors?.dueDate?.message}
                />
                <MyFormButton style={{width: "70%", margin: "16px 0 20px"}}>Create task</MyFormButton>
            </MyForm>
        </>
    );
};

export default CreateForm;