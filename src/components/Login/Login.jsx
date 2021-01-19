import React from "react";
import styles from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    let {handleSubmit} = props
    return <form onSubmit={handleSubmit}>
        <div>
            <Field placeholder={'Email'} name={'email'}
                   validate={[required]}
                   component={Input}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'}
                   validate={[required]}
                   component={Input}/>
        </div>
        <div>
            <Field type="checkbox" name={'rememberMe'} component={Input}/> remember me
        </div>
        <div>
            <button>Log in</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = ({email, password, rememberMe}) => {
        props.login(email, password, rememberMe)
    }
    console.log(props.isAuth)
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login})(Login);