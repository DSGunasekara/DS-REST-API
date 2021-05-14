import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { makeStyles, TextField } from '@material-ui/core';

import {getProducts} from "../../actions/products";
import SellerProduct from "./SellerProduct/SellerProduct"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
  },
});

const SellerProducts = () =>{
    const classes = useStyles();
    const  dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

    const products = useSelector((state) => state.products.products);

    const [search, setSearch ] = useState('')
    const [searchItems, setSearchItems ] = useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))?.data.payload.user._id);

    useEffect(()=>{
        let se = products?.filter(item=> item?.ItemName?.toLowerCase().includes(search.toLowerCase()) && item?.seller._id === user)
        setSearchItems(se);
    }, [products, search, user])

    const removeItem = async(id) => {
        setSearchItems(searchItems.filter(item=> item._id !== id))
        // dispatch(removeCartItem(id));
      }

    return(
        <>
            <h1>Profile</h1>
                   <TextField name={"ItemName"} variant={'outlined'} style={{marginBottom: "10px"}} label={"Search Products"} fullWidth value={search}
                      onChange={ (e) => setSearch(e.target.value)}
                    />
            { !searchItems?.length ?
                    <h1>No Products</h1> 
                   :
                searchItems?.map(item=>(<SellerProduct item={item} key={item._id} removeItem={removeItem}/>))
            }
        </>
    )
}

export default SellerProducts;