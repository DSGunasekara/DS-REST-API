import React, {useEffect, useState} from "react";
import {Container, Grid, Grow} from "@material-ui/core";
import {useDispatch} from "react-redux";
import Product from "../Products/Products";
import { getProducts } from "../../actions/products"
const Home= () =>{

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    },[currentId, dispatch]);

    return(
        <Grow in>
            <Container>
                    <Grid container justify={"space-between"} alignItems={"stretch"} spacing={3}>
                        <Grid item={12} sm={7}>
                            <Product setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
            </Container>
        </Grow>
    )
}

export default Home;