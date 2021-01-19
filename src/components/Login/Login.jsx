import React from "react";
import styles from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    let {handleSubmit} = props
    return <form onSubmit={handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'}
                   validate={[required]}
                   component={Input}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'}
                   validate={[required]}
                   component={Input}/>
        </div>
        <div>
            <Field type="checkbox" name={'checkbox'} component={Input}/> remember me
        </div>
        <div>
            <button>Log in</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;