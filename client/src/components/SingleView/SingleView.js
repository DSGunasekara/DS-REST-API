import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useLocation } from 'react-router-dom';
import { Card, CardMedia, Typography, CardContent, CardActionArea, CardActions, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';

import { getProduct } from "../../actions/products";
import { pushToCart } from "../../actions/cart"

const useStyles = makeStyles({
    root: {
      maxWidth: 1024,
    },
    media: {
      height: 400,
    },
  });

const SingleView = () =>{

    const location = useLocation();
    const dispatch = useDispatch();
    let product = useSelector((state) => state.products.product);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))?.data.payload.user._id);
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    let [qty, setQty ] = useState(1);

    const id = location.pathname.split('/')[2];
    
    useEffect(()=>{
        dispatch(getProduct(id));
    }, [id, dispatch])
    
    const increase = ()=>{
        if(product.quantity > qty){
            setQty(qty+1)
        }
    }

    const decrease = ()=>{
        if(qty !== 1){
            setQty(qty-1)
        }
    }

    const addToCart = () => {
        let cartItem = {
            item: id,
            qty,
            customer: user
        }
        dispatch(pushToCart(cartItem));
        setQty(1);
        setOpen(true);
    }

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return(
        product && (    
            <Card className={classes.root}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        <AlertTitle>Item Added to Cart</AlertTitle>
                    </Alert>
                </Snackbar>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={product.images}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Item: {product.ItemName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Description: <b> {product.description} </b>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Available Quantity: <b> {product.quantity}</b>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Unit Price: <b> {product.price}</b>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Seller: <b> {product.seller.name}</b>
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button variant="outlined" size="small" color="secondary" onClick={decrease}>-</Button>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Quantity: <b> {qty}</b>
                    </Typography>
                    <Button variant="outlined" size="small" color="primary" onClick={increase}>+</Button>
                </CardActions>
                {
                    !user ? <Typography variant="body1" color="textSecondary" component="h2">
                                LogIn To Proceed
                            </Typography> : (
                                <CardActions>
                                    <Button variant="contained" size="small" color="primary" onClick={ addToCart }>Add to Cart</Button>
                                </CardActions>
                    )
                }
                
            </Card>
        )
    )
}

export default SingleView;