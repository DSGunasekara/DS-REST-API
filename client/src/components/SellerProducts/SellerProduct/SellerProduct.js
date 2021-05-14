import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Button, Typography, Grid} from '@material-ui/core';

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

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={3}>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                     Name: {item?.ItemName} 
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                Quantity: {item?.quantity}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography fontSize={32} className={classes.title} color="textPrimary" gutterBottom>
                Unit Price: {item?.price} 
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography fontSize={32} className={classes.title} color="textPrimary" gutterBottom>
                Sold Quantity: {item?.sold} 
                </Typography>
            </Grid>
            <Grid item xs={1}>
              <Button size="small" variant="outlined" color="primary" onClick={()=> removeItem(item._id)}>Update</Button>
            </Grid>
            <Grid item xs={1}>
              <Button size="small" variant="outlined" color="secondary" onClick={()=> removeItem(item._id)}>Remove</Button>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
