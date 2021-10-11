import React, { useEffect, useState, useReducer, useContext, useRef } from 'react';
import AuthContext from '../store/AuthContext';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import classes from './Login.module.css';

const emailReducer = (state, action) => {
    
    if(action.type === 'USER_INPUT')
    {
        return { value: action.val, isValid: action.val.includes('@')}
    }
    if(action.type === 'INPUT_BLUR') {
        return {value: state.value, isValid: state.value.includes('@')}
    }
    return {
        value: '',
        isValid: false
    }
}

const passwordReducer = (state, action) => {
    if(action.type === 'USER_INPUT')
    {
        return { value: action.val, isValid: action.val.trim().length > 6}
    }
    if(action.type === 'INPUT_BLUR') {
        return {value: state.value, isValid: state.value.trim().length > 6}
    }
    return {
        value: '',
        isValid: false
    }

}

function Login (props) {
  /*   const [enteredEmail, setEmail] = useState('')
    const [isEmailValid, setEmailValid] = useState() */
   /*  const [enteredPassword, setPassword] = useState('')
    const [isPasswordValid, setPasswordValid] = useState() */
  
    const ctxAuth = useContext(AuthContext)
  
    const [isformValid, setFormValid] = useState(false) 

    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: undefined})
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: undefined})

    const {isValid: emailIsValid } = emailState
    const {isValid: passwordIsValid} = passwordState

    const emailRef = useRef()
    const passwordRef= useRef()

  const timeHandler= useEffect(() => {

        setTimeout(() => {

        setFormValid(emailIsValid && passwordIsValid)
            
        }, 500);
        return (() => {
            clearTimeout(timeHandler)
            
        })
    }, [emailIsValid, passwordIsValid]) 


    const onEmailChange = (event) => {
        dispatchEmail({type: 'USER_INPUT', val: event.target.value})
       /*  setFormValid(event.target.value.includes('@') && passwordState.isValid) */
      
    }

    const onPasswordChange = (event) => {
        dispatchPassword({type: 'USER_INPUT', val: event.target.value})
       /*  setFormValid(emailState.isValid && event.target.value.trim().length > 6) */
     
    }
    const checkEmail = () => {
        dispatchEmail({type: 'INPUT_BLUR'})
       
    }
    const checkPassword = () => {
        dispatchEmail({type: 'INPUT_BLUR'})
    }

    const onLogin = (event) => {
        event.preventDefault();
        if(isformValid)
        {
        ctxAuth.onLogin(emailState.value, passwordState.value)
        }
        else if(!emailIsValid) {
        console.log('Ref',emailRef)
        emailRef.current.focus();

        }
        else {
        passwordRef.current.focus();

        }

        
        

    }
    return (
        <Card className={classes.login}>
            <form onSubmit={onLogin}>
               <Input ref={emailRef} id="email" label="Email" type="email" value={emailState.value} isValid={emailIsValid} onChange={onEmailChange} onBlur={checkEmail}></Input>
               <Input ref={passwordRef} id="password" label="Password" type="password" value={passwordState.value} isValid={passwordIsValid} onChange={onPasswordChange} onBlur={checkPassword}></Input>
               
                <div className={classes.actions}>
                <Button type="submit">
                    Login
                </Button>
                </div>
            </form>

        </Card>
    );


}
export default Login;