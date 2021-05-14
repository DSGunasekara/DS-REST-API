import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Button, Typography, Grid, TextField} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
  },
});

export default function CardPay({total}) {
  const classes = useStyles();

  const [ cardData, setCardData] = useState({
    cardHolder: "",
    cardNumber: "",
    amount: "",
    cvc: ""
});

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={3}>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                Holder Name: <TextField name={"cardHolder"} variant={'outlined'} label={"Holder Name"} fullWidth value={cardData.cardHolder}
                           onChange={ (e) => setCardData({...cardData, cardHolder: e.target.value})}
                />
                </Typography>
            </Grid>
            <Grid item xs={3}>
            <Typography className={classes.title} color="textPrimary" gutterBottom>
                Card Number: <TextField name={"cardHolder"} variant={'outlined'} label={"Card Number"} fullWidth value={cardData.cardNumber}
                           onChange={ (e) => setCardData({...cardData, cardNumber: e.target.value})}
                />
                </Typography>
            </Grid>
            <Grid item xs={3}>
            <Typography className={classes.title} color="textPrimary" gutterBottom>
            Amount: <TextField name={"cardHolder"} variant={'outlined'} label={"Amount"} fullWidth value={total}
                />
                </Typography>
            </Grid>
            <Grid item xs={3}>
            <Typography className={classes.title} color="textPrimary" gutterBottom>
            CVC: <TextField name={"cardHolder"} variant={'outlined'} label={"CVC"} fullWidth value={cardData.cvc}
                           onChange={ (e) => setCardData({...cardData, cvc: e.target.value})}
                />
                </Typography>
            </Grid>
            <Grid item xs={2}>
            <Button size="small" variant="outlined" color="primary">Pay</Button>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
