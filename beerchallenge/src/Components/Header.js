import React from 'react'
import {Container, Label} from 'semantic-ui-react'
import SearchBar from './SearchBar'

const Header = ({beerSearch}) =>{
    return(
        <header className="App-header">
            <h1 className="App-title">Libations Tracker!</h1>
            <Container style={{'min-width':"1250px"}}>
                <div className="flexDiv">
                <Label id="search_bar_label" size="huge">Search For Beer by Name: </Label>
                <SearchBar onSearchTermChange={beerSearch}/>                 
                </div>
            </Container>
        </header>
    )
}

export default Header;