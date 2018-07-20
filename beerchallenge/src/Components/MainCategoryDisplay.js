import React, {Component} from 'react';
import {Accordion, Icon} from 'semantic-ui-react'
import BeerDisplay from '../Components/BeerDisplay'

class MainCategoryDisplay extends Component {
    constructor(props){
        super(props);

        this.state = {activeIndex: 0};
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
      }

    getBeerCount = (category) => {
        return this.props.beers.filter(x => x.category === category.url).length
    }

    render(){
        const { activeIndex } = this.state
        return(            
            <Accordion className="category_display_accordian" fluid styled>
                { 
                    this.props.categories.map((category) => {
                        return(
                            <div style={{'display': !this.props.showAll && this.getBeerCount(category) === 0 ? "none" : ''}}>
                                <Accordion.Title active={activeIndex === category.key} index={category.key} onClick={this.handleClick}>
                                    <h1 style = {{height:'35px'}}>
                                        <div style={{'float':'left'}}>
                                            {category.name}
                                            <Icon name='dropdown' />
                                        </div> 

                                        <div style={{'float':'right'}}>
                                            {this.getBeerCount(category)} <Icon name="beer"/> 
                                        </div>
                                                                
                                    </h1>
                                </Accordion.Title>

                                <Accordion.Content active={activeIndex === category.key}>
                                    <BeerDisplay
                                         beers= {this.props.beers}
                                         selectedCategoryUrl= {category.url}>
                                     </BeerDisplay>
                                </Accordion.Content>
                            </div>
                        )
                    })
                } 
            </Accordion>
        )
    }
}

export default MainCategoryDisplay;