import React, { Component  } from 'react';

import { Input, Icon} from 'semantic-ui-react'

//classbased component
class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render(){
        return (
            <Input  
                icon
                placeholder='Search...'
                onChange={event => this.onInputChange(event.target.value)}
                value = {this.state.term}
                size = "big">
                    <input id='search_bar'/>
                    <Icon color="yellow" name='search' />
            </Input>
        );
    }

    onInputChange(term) {
        this.setState({term});
        console.log(this.props.onSearchTermChange);
        this.props.onSearchTermChange(term);
    }    
}
export default SearchBar;