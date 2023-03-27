import { TextField } from "@mui/material"
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IInputProps{
    label: string;
    type: "text" | "email" | "password";
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
    defaultValue: string | undefined | null;
}

export const Input = ({ label, type, register, error, defaultValue}: IInputProps) => {
  return (
    <fieldset>
        <TextField type={type} label={label} {...register} defaultValue={defaultValue} />
        {error ? <p>{error.message}</p> : null}
    </fieldset>
  )
}