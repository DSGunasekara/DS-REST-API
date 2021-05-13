import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, Typography, Grid} from '@material-ui/core';

import { getCartItems } from "../../actions/cart"
import CartItem from "./CartItem"
import { removeCartItem } from '../../actions/cart';
import CardPay from "../Card/CardPay"
import MobilePay from "../MobilePay/MobilePay"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
  },
});

const Cart = () =>{
    const dispatch = useDispatch();
    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')).data.payload.user._id);
    const [cardPayment, setCardPayment ] = useState(false);
    const [mobilePayment, setMobilePayment ] = useState(false);

    let items = useSelector((state)=> state.Cart.cart)
    const [cartItems, setCartItems ] = useState(items);
    const [total, setTotal ] = useState(0);

    useEffect(()=>{
        dispatch(getCartItems(user));
    }, [dispatch, user])

    useEffect(()=>{
        setCartItems(items)
    },[items])

    console.log(items);

    useEffect(()=>{
        let temp = 0;
        if(cartItems?.length > 0){
            cartItems.forEach(item => {
                temp += item.qty * item.item.price
            });
            setTotal(temp)
        }
    }, [cartItems])

    const removeItem = async(id) => {
        setCartItems(cartItems.filter(item=> item._id !== id))
        dispatch(removeCartItem(id));
      }

      const chooseCard = (id) =>{
          switch(id){
            case 1:
                setCardPayment(true);
                setMobilePayment(false);
                break;
            case 2:
                setCardPayment(false);
                setMobilePayment(true);
                break;
            default:
                setCardPayment(false);
                setMobilePayment(false);
          }

      }


    return(
        <>
            <h1>Cart</h1>
            { !cartItems?.length ? <h1>Cart Empty</h1> :
                cartItems?.map(item=>(<CartItem item={item} key={item._id} removeItem={removeItem}/>))
            }
            <h2>Checkout</h2>
            <Card className={classes.root}>
                <CardContent>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={4}>
                            <Typography className={classes.title} color="textPrimary" gutterBottom>
                                Total: {total}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Button size="small" variant="outlined" color="primary" onClick={() => chooseCard(1)}>Pay with Card</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button size="small" variant="outlined" color="primary" onClick={() => chooseCard(2)}>Pay with Mobile Account</Button>
                        </Grid>
                    </Grid>        
                </CardContent>
            </Card>
            {
                cardPayment && (
                    <CardPay total={total}/>
                )
            }
            {
                mobilePayment && (
                    <MobilePay total={total}/>
                )
            }
           
        </>
    )
}

export default Cart;