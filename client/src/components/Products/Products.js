import React, { useEffect} from 'react';
import { Grid, CircularProgress, Button, Container } from "@material-ui/core";
import useStyles from './styles';
import Product from "./Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import {getProducts} from "../../actions/products";


const Products = ()=>{
    const classes = useStyles();
    const  dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        dispatch(getProducts());
    },[])

    const products = useSelector((state) => state.products.products);
    const single = (id)=>{
        history.push(`/product/${id}`)
    }
    console.log(products);
    return(
        !products?.length ? <CircularProgress/> : (
            <Grid className={classes.mainContainer} container alignItems={"stretch"} spacing={3}>
                {products.map((product) =>(
                    <Grid key={product._id} item xs={12} sm={4}>
                        <div onClick={()=>single(product._id)}>
                            <Product product={product} ></Product>
                        </div>

                    </Grid>
                ))}
            </Grid>
        )
     );
}

export default Products;