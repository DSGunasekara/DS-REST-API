import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

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
    const [seachItems, setSearchItems ] = useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))?.data.payload.user._id);

    useEffect(()=>{
        let se = products?.filter(item=> item?.ItemName?.toLowerCase().includes(search.toLowerCase()) && item?.seller._id === user)
        setSearchItems(se);
    }, [products, search, user])

    const removeItem = async(id) => {
        setSearchItems(seachItems.filter(item=> item._id !== id))
        // dispatch(removeCartItem(id));
      }


    return(
        <>
            <h1>Profile</h1>
            { !seachItems?.length ? <h1>Cart Empty</h1> :
                seachItems?.map(item=>(<SellerProduct item={item} key={item._id} removeItem={removeItem}/>))
            }
        </>
    )
}

export default SellerProducts;