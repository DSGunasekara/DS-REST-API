import React, {useState} from "react";
import useStyles from './styles';
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {createProduct} from "../../actions/products";
import FileBase from "react-file-base64";

const AddProduct = ({currentId, setCurrentId}) =>{

    const [productData, setProductData] = useState({
        ItemName:'',
        price:'',
        description:'',
        images:'',
        quantity:'',
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = async (e) =>{
        e.preventDefault();
            dispatch(createProduct(currentId, {...productData, name:user?.result?.name}));
    };

    if(!user?.result?.name){
        return (
            <Paper className={classes.paper}>
                <Typography variant={"h6"} align={"center"}>
                    Please Sign in to add your own Product
                </Typography>
            </Paper>
        )
    }

    const clear = () =>{

    }

    return(
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
                    <FileBase type={"file"} mulitple={false} onDone={({base64}) => setProductData({ ...productData, images: base64})}/>
                </div>

                <Button className={classes.buttonSubmit} color={"primary"} variant={"contained"} size={"large"} type={"submit"} fullWidth>create</Button>
                <Button  color={"secondary"} variant={"contained"} size={"small"} onClick={clear} fullWidth>clear</Button>
            </form>

        </Paper>
    )
}

export default AddProduct;