import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, Typography, Grid} from '@material-ui/core';
import { useDispatch } from "react-redux";



const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
});

export default function CartItem({ item, removeItem }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                     Item: {item.item.ItemName} 
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                Quantity: {item.qty}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography fontSize={32} className={classes.title} color="textPrimary" gutterBottom>
                Price: {item.item.price} 
                </Typography>
            </Grid>
        </Grid>
        
        
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="secondary" onClick={()=> removeItem(item._id)}>Remove</Button>
      </CardActions>
    </Card>
  );
}
