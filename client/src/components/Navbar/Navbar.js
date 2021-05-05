import React, {useState} from "react";
import {AppBar, Avatar, Toolbar, Typography, Button} from "@material-ui/core";
import { Link,useHistory } from 'react-router-dom';
import {useDispatch} from "react-redux";
import useStyles from './styles'

const Navbar = () =>{
    const classes = useStyles();
    const  dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);


    const logout = ()=>{
        dispatch({type:'LOGOUT'});

        history.push('/');

        setUser(null);
    };

    return(
        <AppBar className={classes.appBar} position={"static"} color={"inherit"}>
            <div className={classes.brandContainer}>
                <Typography component={ Link } to={"/"} className={classes.heading} variant={"h2"} align={"center"}>Online Shopping</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant={"h6"}>{user.result.name}</Typography>
                        <Button variant={"contained"} className={classes.logout} color={"secondary"} onClick={logout}>Logout</Button>
                    </div>
                ): (
                    <Button component={Link} to={"/auth"} variant={"contained"} color={"primary"}>Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar