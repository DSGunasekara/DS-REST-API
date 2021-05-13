import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import { getCartItems } from "../../actions/cart"
import CartItem from "./CartItem"
import { removeCartItem } from '../../actions/cart';

const Cart = () =>{
    const dispatch = useDispatch();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')).data.payload.user._id);

    let items = useSelector((state)=> state.Cart.cart)
    const [cartItems, setCartItems ] = useState(items);

    useEffect(()=>{
        dispatch(getCartItems(user));
    }, [dispatch, user])

    useEffect(()=>{
        setCartItems(items)
    },[items])

    console.log(items);

    const removeItem = async(id) => {
        setCartItems(cartItems.filter(item=> item._id !== id))
        dispatch(removeCartItem(id));
      }

    return(
        <>
            <h1>Cart</h1>
            { !cartItems?.length ? <h1>Cart Empty</h1> :
                cartItems?.map(item=>(<CartItem item={item} key={item._id} removeItem={removeItem}/>))
            }
        </>
    )
}

export default Cart;