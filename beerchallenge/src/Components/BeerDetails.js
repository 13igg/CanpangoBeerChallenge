import React from 'react';
import {Container, Card, Button} from 'semantic-ui-react'

const BeerDetails = ({beer, category, deleteBeer}) => {
    
    return(
            <Container style={{'padding':'10px'}}>                
                <Card fluid color="orange">
                    <Card.Content>
                        <Card.Header className="beer_detail_header">
                            <h2>{(beer.name) ? beer.name.toUpperCase() : ''} - {category.name} {beer.style}</h2>
                        </Card.Header>
                        <Card.Meta className="beer_detail_meta">
                            Brewed in: {beer.brewery_location}
                        </Card.Meta>    
                        <Card.Description className="beer_detail_description">                         
                            <p>
                                <b>Category:</b> {category.name} &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <b>Ibu:</b> {beer.ibu} <br/>
                                <b>Calories:</b>  {beer.calories}  &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <b>abv:</b> {beer.abv}
                            </p>    
                        </Card.Description>
                    </Card.Content>
                    <div id="beer_buttons"> <Button id="delete_beer" negative onClick={deleteBeer}> DELETE ME </Button> </div>
                </Card>
            </Container>
        )
}

export default BeerDetails;