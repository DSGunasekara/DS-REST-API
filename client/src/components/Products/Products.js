import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress, TextField } from "@material-ui/core";
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
    },[dispatch])

    const products = useSelector((state) => state.products.products);

    const [search, setSearch ] = useState('')
    const [seachItems, setSearchItems ] = useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))?.data.payload.user._id);

    const single = (id)=>{
        history.push(`/product/${id}`)
    }

    useEffect(()=>{
        let se = products?.filter(item=> item?.ItemName?.toLowerCase().includes(search.toLowerCase()) && item?.seller._id !== user)
        setSearchItems(se);
    }, [products, search, user])

    return(
        !seachItems?.length ? <>
                                <TextField name={"ItemName"} variant={'outlined'} label={"Search Products"} fullWidth value={search}
                           onChange={ (e) => setSearch(e.target.value)}
                           />
                           <CircularProgress/>
                             </>: (
            <Grid className={classes.mainContainer} container alignItems={"stretch"} spacing={3}>
                <TextField name={"ItemName"} variant={'outlined'} label={"Search Products"} fullWidth value={search}
                           onChange={ (e) => setSearch(e.target.value)}
                />
                {seachItems.map((product) =>(
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