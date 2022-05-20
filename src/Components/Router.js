import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Shop from "./Shop";
import Services from "./Services";
import Contact from "./Contact";

export default class Paths extends Component {
    render() {
        return (
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route path="/signup" exact element={<Signup />}></Route>
                    <Route path="/shop" exact element={<Shop />}></Route>
                    <Route path="/services" exact element={<Services />}></Route>
                    <Route path="/contact" exact element={<Contact />}></Route>
                </Routes>
        )
    }
}