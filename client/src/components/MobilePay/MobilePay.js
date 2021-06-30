import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Button, Typography, Grid, TextField} from '@material-ui/core';
//this is the comment werfw
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
  },
});

export default function MobilePay({total , pay}) {
  const classes = useStyles();

  const [ cardData, setCardData] = useState({
    mobileNumber: "",
    amount: total,
    payment:{
      paymentMethod: "Mobile"
    }
});

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={6}>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                Mobile Number: <TextField name={"mobileNumber"} variant={'outlined'} label={"Mobile Number"} fullWidth value={cardData.mobileNumber}
                           onChange={ (e) => setCardData({...cardData, mobileNumber: e.target.value})}
                />
                </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography className={classes.title} color="textPrimary" gutterBottom>
            Amount: <TextField name={"cardHolder"} variant={'outlined'} label={"Amount"} fullWidth value={total}
                           onChange={ (e) => setCardData({...cardData, amount: total})}
                />
                </Typography>
            </Grid>
            <Grid item xs={2}>
            <Button size="small" variant="outlined" color="primary" onClick={()=> pay(cardData)}>Pay</Button>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
