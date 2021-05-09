import React, { useEffect} from 'react';
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from './styles';
import Product from "./Product/Product";
import { useSelector, useDispatch } from "react-redux";

import {getProducts} from "../../actions/products";


const Products = ()=>{
    const classes = useStyles();
    const  dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[])

    const products = useSelector((state) => state.products.products);

    console.log(products);
    return(
        !products.length ? <CircularProgress/> : (
            <Grid className={classes.mainContainer} container alignItems={"stretch"} spacing={3}>
                {products.map((product) =>(
                    <Grid key={product._id} item xs={12} sm={6}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        )
     );
}

export default Products;