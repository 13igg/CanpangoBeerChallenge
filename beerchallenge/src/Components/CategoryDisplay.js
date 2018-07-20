import React from 'react';
import {Statistic, Grid, Rail, Segment, Button} from 'semantic-ui-react'

const CategoryDisplay = ({categories, selectedCategoryUrl, onCategoryChange}) => {
    return(
            <div>
                { 
                    categories.map((category) => {
                        return(
                                <li
                                    onClick={(e) => onCategoryChange(category.url)}
                                    className='list-group-item'
                                >
                                    <Segment>
                                        {category.name}
                                    </Segment>
                                </li>
                        )
                    })
                } 
        </div>
        )
}

export default CategoryDisplay;