import React from 'react';
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from './styles';
import { useSelector } from "react-redux";


const Products = ()=>{
    const classes = useStyles();
    const products = useSelector((state) => state.products);

    console.log(products);
    return(
        !products ? <CircularProgress/> : (
            <Grid className={classes.mainContainer} container alignItems={"stretch"} spacing={3}>

            </Grid>
        )

    );
}

export default Products;