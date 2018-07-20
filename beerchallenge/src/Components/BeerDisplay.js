import React from 'react';
import {Card} from 'semantic-ui-react'

import {withRouter, NavLink } from 'react-router-dom';

const BeerDisplay = ({beers, selectedCategoryUrl}) =>{
    function displayBeers(){        
        const filteredBeers = beers.filter(x => x.category === selectedCategoryUrl);
       
        if(filteredBeers.length > 0){
            return filteredBeers.map((beer) => {
                    return (
                        //had to directly specify the classname of the semanticUI Card property here
                        //had I not, then the parent Card.Group would not recognize the anchr tag of the NavLink
                        <NavLink className="ui black card beer_card" to={`/beerdetails/${beer.key}`}>
                            <Card.Content textAlign="left">                                
                                    <Card.Header>
                                        {beer.name}
                                    </Card.Header>
                                    <Card.Meta>
                                        Brewery location: {beer.brewery_location}
                                    </Card.Meta>
                                    <Card.Description>
                                        Style: {beer.style}
                                    </Card.Description>
                                </Card.Content>
                        
                            </NavLink>
                    );
                })
            }
        else return <p>Sorry, there are no beers that match your search critera</p>
    }

    return(        
        <Card.Group itemsPerRow={3}> { displayBeers() } </Card.Group>
    )
}

export default withRouter(BeerDisplay);