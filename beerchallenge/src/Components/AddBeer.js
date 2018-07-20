import React, {Component} from 'react';
import {Button, Container, Form} from 'semantic-ui-react'


class AddBeer extends Component{
    constructor(props){
        super(props);
        this.state = {
                    "name":"",
                    "ibu": 0,
                    "calories": 0,
                    "abv": 0,
                    "style": "",
                    "brewery_location": "",
                    "category": ""
            }
    }
    

    getCategoryDropdownOptions = () => {
        var categoriesCopy = this.props.categories.slice();
        var filterList = categoriesCopy.map((category) => {
            return ({key: category.url, text: category.name, value: category.url});        
        });
        filterList.unshift({key: -1, text: 'All', value: -1})
        
        return filterList;
      }

      handleData = (event, field) => {
        // const { beer } = this.state;
        // beer[field] = event;
        this.setState({ field: event });        
      }

    render() {
        const { name, category, ibu, calories, abv, style, brewery_location} = this.state;
        return(
            <Form onSubmit={() => this.props.addBeer(this.state)}>
                <Container>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Name of Beer' value={name} onChange={(event) => this.setState({'name':event.target.value})} placeholder='Beer Name'/>
                        <Form.Select fluid label='Category' options={this.getCategoryDropdownOptions()} value={category} onChange={(event, data) => this.setState({'category':data.value})} placeholder='Category'/> 
                        <Form.Input fluid label='Brewery Location' value={brewery_location} onChange={(event) => this.setState({'brewery_location':event.target.value})} placeholder='Brewery Location'/>
                    </Form.Group>

                    <Form.Group widths='equal'>
                    
                        <Form.Input fluid label='ABV' value={abv} onChange={(event) => this.setState({'abv':event.target.value})} placeholder='ABV'/>
                        <Form.Input fluid label='Style' value={style} onChange={(event) => this.setState({'style':event.target.value})} placeholder='Style'/>
                        <Form.Input fluid label='IBU' value={ibu} onChange={(event) => this.setState({'ibu':event.target.value})} placeholder='IBU'/>
                        <Form.Input fluid label='Calories' value={calories} onChange={(event) => this.setState({'calories':event.target.value})} placeholder='Calories'/>
                             
                    </Form.Group>
                    
                    
                    
                    


                

                    <Button primary type='submit'>Submit</Button>
                </Container>
            </Form>
        )
    }
}

export default AddBeer