import React, {useEffect, useState} from "react";
import {Container, Grid, Grow} from "@material-ui/core";
import {useDispatch} from "react-redux";

const Home= () =>{

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
    },[currentId, dispatch]);

    return(
        <Grow in>
            <Container>
                    <Grid container justify={"space-between"} alignItems={"stretch"} spacing={3}>
                        <h1>Hello</h1>
                    </Grid>
            </Container>
        </Grow>
    )
}

export default Home;