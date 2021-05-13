import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useLocation } from 'react-router-dom';
import { Card, CardMedia, Typography, CardContent, CardActionArea, CardActions, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { getProduct } from "../../actions/products";

const useStyles = makeStyles({
    root: {
      maxWidth: 1024,
    },
    media: {
      height: 500,
    },
  });

const SingleView = () =>{

    const location = useLocation();
    const dispatch = useDispatch();
    let product = useSelector((state) => state.products.product);
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

    return(
        product && (    
            <Card className={classes.root}>
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
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="outlined" size="small" color="primary" onClick={increase}>
                    +
                    </Button>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Quantity: <b> {qty}</b>
                    </Typography>
                    <Button variant="outlined" size="small" color="secondary" onClick={decrease}>
                    -
                    </Button>
                </CardActions>
                <CardActions>
                    <Button variant="contained" size="small" color="primary">Add to Cart</Button>
                </CardActions>
            </Card>
        )
    )
}

export default SingleView;