import React, { useState, useEffect} from "react";
import Product from "../Products/Products";
import { useLocation } from 'react-router-dom';
import {useSelector} from "react-redux";

const SingleView = () =>{

    const location = useLocation();
    const [product, setProduct ] = useState(null)
    // const abc = location.split('/');
     console.log(location.pathname.split('/'));
    const id = location.pathname.split('/')[2];

    const products = useSelector((state) => state.products.products);
    // setProduct(products.filter((item)=> item._id === id));

    useEffect( () =>{
        // const products = useSelector((state) => state.products.products);
        setProduct(products.filter((item)=> item._id === id));
    }, [location]);
    return(
            <h1>{product}</h1>
    )
}

export default SingleView;