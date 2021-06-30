import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, Typography, TextField } from '@material-ui/core';
import {useDispatch} from "react-redux";
import { updateProduct } from '../../actions/products';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function UpdateProduct({item, updateProductItem}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [ updateItem, setUpdateItem ] = useState(item);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const productUpdate = () => {
      dispatch(updateProduct(updateItem));
      updateProductItem(updateItem);
      setOpen(false);
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <h1>Update Product</h1>
       <Typography className={classes.title} color="textPrimary" gutterBottom>
                Item Name: <TextField name={"cardHolder"} variant={'outlined'} fullWidth value={updateItem.ItemName}
                           onChange={ (e) => setUpdateItem({...updateItem, ItemName: e.target.value})}
                />
        </Typography>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
                Unit Price: <TextField name={"cardHolder"} variant={'outlined'} fullWidth value={updateItem.price}
                           onChange={ (e) => setUpdateItem({...updateItem, price: e.target.value})}
                />
        </Typography>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
                Quantity: <TextField name={"cardHolder"} variant={'outlined'}  fullWidth value={updateItem.quantity}
                           onChange={ (e) => setUpdateItem({...updateItem, quantity: e.target.value})}
                />
        </Typography>
        <Button size="small" variant="outlined" color="primary" onClick={productUpdate}>
            Update
        </Button>
        <Button size="small" variant="outlined" color="secondary" onClick={handleClose}>
            Cancel
        </Button>
    </div>
  );

  return (
    // <div>
    //   <Button size="small" variant="outlined" color="primary" onClick={handleOpen}>
    //     Update
    //   </Button>
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="simple-modal-title"
    //     aria-describedby="simple-modal-description"
    //   >
    //     {body}
    //   </Modal>
    // </div>
  );
}
