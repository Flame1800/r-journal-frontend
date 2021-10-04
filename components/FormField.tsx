import React from "react";
import {TextField} from "@material-ui/core";
import {useFormContext} from "react-hook-form";

interface FromFieldProps {
    name: string;
    label: string;
}

export const FormField: React.FC<FromFieldProps> = ({ name, label }) => {
    const {register, formState} = useFormContext()
    return (
        <>
            <TextField
                {...register(name)}
                error={!!formState.errors[name]?.message}
                helperText={formState.errors[name]?.message}
                name={name}
                fullWidth
                className="mb-15"
                size='small'
                label={label}
                variant='outlined'
            />
        </>
    )
}