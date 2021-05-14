import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Button, Typography, Grid} from '@material-ui/core';

import UpdateProduct from '../../UpdateProduct/UpdateProduct'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
  },
});

export default function SellerProduct({ item, removeItem }) {
  const classes = useStyles();

  const [ product, setProduct ] = useState(item);

  const updateProductItem = (item) =>{
    setProduct(item)
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={3}>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                     Name: {product?.ItemName} 
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                Quantity: {product?.quantity}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography fontSize={32} className={classes.title} color="textPrimary" gutterBottom>
                Unit Price: {product?.price} 
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography fontSize={32} className={classes.title} color="textPrimary" gutterBottom>
                Sold Quantity: {product?.sold} 
                </Typography>
            </Grid>
            <Grid item xs={1}>
              {/* <Button size="small" variant="outlined" color="primary" onClick={()=> removeItem(item._id)}>Update</Button> */}
              <UpdateProduct item={item} updateProductItem={updateProductItem}/>
            </Grid>
            <Grid item xs={1}>
              <Button size="small" variant="outlined" color="secondary" onClick={()=> removeItem(item._id)}>Remove</Button>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
