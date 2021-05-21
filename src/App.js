import React from 'react'
import Cards from './components/cards'
import Cards2 from './components/cards2'
import Cards3 from './components/cards3'

import './App.css'
import Carouselcontainer from './components/carousel'
import Jumbotron from './components/jumbotron'
import Nav from './components/header'



function App(props) {
    return (

        <div className="App">
            <Nav />
            <Carouselcontainer />
            <div /><h1 className="titulo1">Dragones</h1>
            <Cards />
            <div /><h1 className="titulo1">Caballeros</h1>
            <Cards2 />
            <div /><h1 className="titulo1">Subditos</h1>
            <Cards3 />
            <Jumbotron />
        </div>


    )
}


export default App

