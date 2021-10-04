import React from 'react';
import styles from "../AuthDialog.module.scss";
import {Button, TextField} from "@material-ui/core";
import ArrowIcon from "@mui/icons-material/KeyboardArrowLeft";
import {FormProvider, useForm} from "react-hook-form";
import {FormField} from "../../FormField";
import {yupResolver} from "@hookform/resolvers/yup";
import {RegisterFormSchema} from "../../../utils/schemas/validations";

interface RegisterFromProps {
    onOpenRegister: () => void;
    onOpenLogin: () => void;
}

export const RegisterFrom: React.FC<RegisterFromProps> = ({onOpenRegister, onOpenLogin}) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterFormSchema)
    })
    const onSubmit = data => console.log(data);

    return (
        <div>
            <FormProvider {...form}>
                <FormField name="fullname" label="Имя и фамилия" />
                <FormField name="email" label="Почта" />
                <FormField name="password" label="Пароль" />
                <form  onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="d-flex align-center justify-between">
                        <Button disabled={!form.formState.isValid} onClick={onOpenRegister}  type='submit' color="primary" variant="contained">
                            Зарегистрироваться
                        </Button>
                        <Button onClick={onOpenLogin} color="primary" variant="text" className="ml-10">
                            Войти
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}