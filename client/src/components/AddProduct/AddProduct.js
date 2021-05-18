import React, {useState} from "react";
import useStyles from './styles';
import {TextField, Button, Typography, Paper, Snackbar} from "@material-ui/core";
import {useDispatch } from "react-redux";
import {createProduct} from "../../actions/products";
import FileBase from "react-file-base64";
import { Alert, AlertTitle } from '@material-ui/lab';
// import { useHistory } from 'react-router-dom';

const AddProduct = () =>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')).data.payload.user._id);

    const [productData, setProductData] = useState({
        ItemName:'',
        price:'',
        description:'',
        images:'',
        quantity:'',
        seller: user
    });

    const [open, setOpen] = React.useState(false);

    const classes = useStyles();
    const dispatch = useDispatch();
    // const history = useHistory();

    const handleFile = (e) =>{
        console.log(e.target.files[0])
        setProductData({...productData, images: e.target.files[0]})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(productData);
        const formData = new FormData();
        formData.append('ItemName',productData.ItemName)
        formData.append('price',productData.price)
        formData.append('description',productData.description)
        formData.append('images',productData.images)
        formData.append('quantity',productData.quantity)
        formData.append('seller',user)
        dispatch(createProduct(formData));
        setOpen(true)
        setProductData({ItemName: '', price: '', description: '', images: '', quantity: ''})
    };

    if(!user){
        return (
            <Paper className={classes.paper}>
                <Typography variant={"h6"} align={"center"}>
                    Please Sign in to add your own Product
                </Typography>
            </Paper>
        )
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

     const clear = () =>{
    //     setCurrentId(null);
    //     setProductData({ItemName:'', price:'', description:'', images:'', quantity:''});
     }

    return(
        <>
        {
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    <AlertTitle>Item Added to Cart</AlertTitle>
                </Alert>
            </Snackbar>
            }
            <Paper className={classes.paper}>
                <form autoComplete={"off"} noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant={"h3"}>Add a New Product</Typography>
                    <TextField name={"ItemName"} variant={'outlined'} label={"ItemName"} fullWidth value={productData.ItemName}
                            onChange={ (e) => setProductData({...productData, ItemName: e.target.value})}
                    />

                    <TextField name={"price"} variant={'outlined'} label={"price"} fullWidth value={productData.price}
                                onChange={ (e) => setProductData({...productData, price: e.target.value})}
                    />

                    <TextField name={"description"} variant={'outlined'} label={"description"} fullWidth value={productData.description}
                        onChange={ (e) => setProductData({...productData, description: e.target.value})}
                    />

                    <TextField name={"quantity"} variant={'outlined'} label={"quantity"} fullWidth value={productData.quantity}
                        onChange={ (e) => setProductData({...productData, quantity: e.target.value})}
                    />

                    <div className={classes.fileInput}>
                        <input type={"file"} mulitple={false} onChange={(e) => handleFile(e)}/>
                    </div>

                    <Button className={classes.buttonSubmit} color={"primary"} variant={"contained"} size={"large"} type={"submit"} fullWidth>create</Button>
                    <Button  color={"secondary"} variant={"contained"} size={"small"} onClick={clear} fullWidth>clear</Button>
                </form>
            </Paper>
        </>
    )
}

export default AddProduct;