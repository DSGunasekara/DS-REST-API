import React, {useEffect, useState} from "react";
import {Container, Grid, Grow} from "@material-ui/core";
import AddProduct from "../../components/AddProduct/AddProduct";
import {useDispatch} from "react-redux";

const AddProductPage = () =>{
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    return(
        <Grow in>
            <Container>
                <Grid container  justify={"space-between"} alignItems={"stretch"} spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <AddProduct currentId ={currentId} setCurrentId = {setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default AddProductPage;