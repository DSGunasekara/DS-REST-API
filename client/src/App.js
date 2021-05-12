import React from 'react';
import { Container} from "@material-ui/core";

import {BrowserRouter, Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth"
import Home from "./components/Home/Home";
import Product from "./components/Products/Product/Product"
import singleView from "./components/SingleView/SingleView"

const App = () =>{
    return(
        <BrowserRouter>
            <Container maxWidth={"lg"}>
                <Navbar/>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/auth"} exact component={Auth}/>
                    <Route path={"/product/:id"} exact component={singleView}/>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;