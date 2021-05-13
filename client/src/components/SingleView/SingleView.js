import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useLocation } from 'react-router-dom';
import { getProduct } from "../../actions/products";
;

const SingleView = () =>{

    const location = useLocation();
    const dispatch = useDispatch();
    let product = useSelector((state) => state.products.product);
    // const [product, setProduct ] = useState(null)
    const id = location.pathname.split('/')[2];
    // let product = null;

    useEffect(()=>{
        dispatch(getProduct(id));
        
    }, [id, dispatch])

    
    console.log(product);

    return(
            <h1>{product?.ItemName}</h1>
    )
}

export default SingleView;