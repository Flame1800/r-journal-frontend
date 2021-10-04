import React from 'react';
import { useForm, FormProvider } from "react-hook-form";
import {Button} from "@material-ui/core";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginFormSchema} from '../../../utils/schemas/validations'
import {FormField} from "../../FormField";

interface LoginFromProps {
    onOpenRegister: () => void;
}

export const LoginFrom: React.FC<LoginFromProps> = ({onOpenRegister}) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginFormSchema)
    })
    const onSubmit = data => console.log(data);

    return (
        <div>
            <FormProvider {...form}>
                <FormField name="email" label="Почта" />
                <FormField name="password" label="Пароль" />
                <form  onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="d-flex align-center justify-between">
                        <Button disabled={!form.formState.isValid} type='submit' color="primary" variant="contained">
                            Войти
                        </Button>
                        <Button onClick={onOpenRegister} color="primary" variant="text" className="ml-10">
                            Регистрация
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}