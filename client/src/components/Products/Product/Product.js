import React from 'react';
import { Card, CardMedia, Typography } from "@material-ui/core";
// import moment from "moment";
import useStyles from './styles';
// import { useDispatch } from "react-redux";



const Product = ({product}) =>{
    const classes = useStyles();
    // const dispatch = useDispatch();
    // const user = JSON.parse(localStorage.getItem('profile'));

    return(
        <Card className={classes.card} >
            <CardMedia className={classes.media} image={product.images} title={product.ItemName}/>
            <div>
                <Typography variant={"h6"}>{product.ItemName}</Typography>
            </div>
        </Card>
    )

}

export default Product;