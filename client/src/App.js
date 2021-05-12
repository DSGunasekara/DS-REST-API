import React from 'react';
import { Container} from "@material-ui/core";

import {BrowserRouter, Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth"
import Home from "./components/Home/Home";
import Product from "./components/Products/Product/Product";
import singleView from "./components/SingleView/SingleView";
import Orders from './components/Cart/Cart';
import AddProductPage from "./components/AddProductPage/AddProductPage";

const App = () =>{
    return(
        <BrowserRouter>
            <Container maxWidth={"lg"}>
                <Navbar/>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/auth"} exact component={Auth}/>
                    <Route path={"/product/:id"} exact component={singleView}/>
                    <Route path={"/orders"} exact component={Orders}/>
                    <Route path={"/AddProductPage"} exact component={AddProductPage}/>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;