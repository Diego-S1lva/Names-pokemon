import React, { Fragment } from "react";
import {Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import CounterClick from "./Cadastro";
import Cadastro from "./Cadastro";
import CadastroCartas from "./CadastrarCartas";
import Cartas from "./Cartas";
import Mostrarnomes from "./Mostrarnomes";
import './App.modules.css';
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import Login from "./Login";
export default function AppPages(){
    return(
            <Router>
                <Nav></Nav>
                <Routes>
                    <Route path="/" element={<Cadastro/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/mostrarnomes" element={<Mostrarnomes/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </Router>
    )
}