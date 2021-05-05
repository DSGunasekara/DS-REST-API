import React, {useState} from "react";
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from "./Input";
import Icon from "./Icon";

import {signin, signup} from '../../actions/auth';

const initialState = {name: '', email: '', password: '', confirmPassword: '', contactNo:'', address:''};

const Auth = () =>{
    const classes = useStyles();

    const [isSignup, setIsSignup]= useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const dispatch = useDispatch();
    const history = useHistory();


    //to handle the submit of the sign in form
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(isSignup){
            dispatch(signup(formData, history));
        }else {
            dispatch(signin(formData, history));
        }
    };

    //
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    //show and hide the password
    const handleShowPassword = ()=> setShowPassword((prevShowPassword)=> !prevShowPassword);


    //switching between signIn and signUp
    const switchMode =() =>{
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);

    }
    return(
        <Container component={"main"} maxWidth={"xs"}>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlineIcon/>
                </Avatar>
                <Typography variant={"h5"}>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name={"name"} label={"Name"} handleChange={handleChange} autoFocus half/>
                                </>
                            )}
                            <Input name ={"email"} label={"Email Address"} handleChange={handleChange} type={"email"}/>
                            <Input name ={"password"} label={"Password"} handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        {
                            isSignup &&
                            <Input name={"confirmPassword"} label={"Repeat Password"} handleChange={handleChange} type={"password"}/>
                        }
                        {
                        isSignup && (
                        <>
                            <Input name ={"contactNo"} label={"Contact Number"} handleChange={handleChange}/>
                            <Input name={"address"} label={"Address"} handleChange={handleChange}/>
                        </>
                        )}
                    </Grid>

                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        className={classes.submit}>
                        {isSignup? 'Sign Up' : 'Sign In'}
                    </Button>

                    <Grid container justify={"flex-end"}>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign In' : "Don't have and account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;