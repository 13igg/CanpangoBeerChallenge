import React from 'react'
import {Container, Label, Button, Icon} from 'semantic-ui-react'
import SearchBar from './SearchBar'
import {NavLink, withRouter} from 'react-router-dom';

const Header = ({beerSearch}) =>{
    return(
        <header className="App-header">
            <h1 className="App-title">Beer Finder!</h1>
            <Container style={{'min-width':"1250px"}}>
                <div className="flexDiv">
                <Label id="search_bar_label" size="huge">Search For Beer by Name: </Label>
                <SearchBar onSearchTermChange={beerSearch}/>                 
                </div>
            </Container>
            <NavLink id="add_new_beer_button" to="/addbeer">
                <Button icon color="green" labelPosition='right'>
                    Add New Beer
                    <Icon name='plus circle' />
                </Button>
            </NavLink>
        </header>
    )
}

export default withRouter(Header);