import React from "react";
import styles from './Login.module.css';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    let {handleSubmit} = props
    return <form onSubmit={handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'} component={'input'}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={'input'}/>
        </div>
        <div>
            <Field type="checkbox" name={'checkbox'} component={'input'}/> remember me
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