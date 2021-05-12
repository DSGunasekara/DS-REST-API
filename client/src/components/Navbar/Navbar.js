import React, {useState, useEffect} from "react";
import {AppBar, Avatar, Toolbar, Typography, Button} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import { Link,useHistory,useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import decode from 'jwt-decode';
import useStyles from './styles'

const Navbar = () =>{
    const classes = useStyles();
    const  dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
   // const tempUser = useSelector(state => state.auth.authData);
  //  const [user, setUser] = useState(useSelector(state => state.auth.authData));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);


    const logout = ()=>{
        dispatch({type:'LOGOUT'});

        history.push('/');

        setUser(null);
    };

    const cartPage = () =>{

    }

    const addProduct = () =>{
        dispatch({type:'CREATE'});

        history.push('/AddProductPage');
    }

    useEffect(()=>{
        const token = user?.token;

        if(token){
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return(

        <AppBar className={classes.appBar} position={"static"} color={"inherit"}>
            <div className={classes.brandContainer}>
                <Typography component={ Link } to={"/"} className={classes.heading} variant={"h2"} align={"center"}>Online Shopping</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.data.payload.user.name} >{user?.data.payload.user.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant={"h6"}>{user?.data.payload.user.name}</Typography>
                        <Button color={"secondary"} onClick={cartPage}>
                            <ShoppingCartIcon></ShoppingCartIcon>Cart
                        </Button>
                        <Button color={"primary"} onClick={addProduct}>
                            <AddIcon></AddIcon>
                        </Button>
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