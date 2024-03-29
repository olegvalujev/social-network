import React from "react";
import styles from './FormsControls.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form"
import {FieldValidatorsType} from "../../../utils/validators/validators"
import {AddPostFormValuesType} from "../../Profile/MyPosts/AddPostForm/AddPostForm";

type FormsControlsPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormsControlsPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = error && touched
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
}


export function createField<FormKeysType extends string>(placeholder: string | undefined,
                            name: FormKeysType,
                            validators: Array<FieldValidatorsType>,
                            component: React.FC<WrappedFieldProps>,
                            props = {},
                            text = '') {
    return <div>
        <Field placeholder={placeholder}
            name={name}
            validate={[...validators]}
            component={component}
            {...props}/>
        {text}
    </div>

}

export type GetStringKeys<T> = Extract<keyof T, string>
