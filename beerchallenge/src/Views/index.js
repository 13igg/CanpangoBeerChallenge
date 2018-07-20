import React, { Component } from 'react';
import _ from 'lodash';
import '../css/App.css';

import * as Endpoints from '../Api/endpoints';

import MainCategoryDisplay from '../Components/MainCategoryDisplay'

import {Container, Checkbox, Dropdown} from 'semantic-ui-react'

import Header from '../Components/Header'

class Index extends Component {
  constructor(props){
    super(props);

    this.state = {
      categories: [],
      beers: [],
      categoryFilter: -1,
      showAll: false,
      //categoryDropdownOptions: [],
      //filteredCategories: []
    };

    //blanket search to get us all the beers
    this.beerSearch('');
  }
  
  //On mounting, fetch all the categories
  async componentDidMount(){
    const categories = await Endpoints.getAllCategories()
      categories.map((obj) => {obj.key = obj.url.replace( /[^0-9]/g, '' ); return obj;});   

    this.setState({categories})
    //this.getCategoryDropdownOptions();
   }


   //Fetch a list of beers based on the query string
  async beerSearch(term){
    var filteredBeers = await Endpoints.searchForBeer(term);
    filteredBeers.map((obj) => {obj.key = obj.url.replace( /[^0-9]/g, '' ); return obj;});   
    
    this.setState({beers:filteredBeers});
  }


  //Having some weird issue here where every command is one behind
  //I filter based on something, and it doesn't take effect till the next onChange event
  //Not quite too sure. Leaving the filterMultiple here b/c I liked it better than a single
  //filter, but since it doesnt work yet, best to leave it out. 
  // getCategoryDropdownOptions = () => {
  //   var categoriesCopy = this.state.categories.slice();
  //   this.setState({categoryDropdownOptions: 
  //                   categoriesCopy.map((category) => {
  //                     return ({key: category.key, text: category.name, value: category.key});        
  //                 })});    
  // }
   // filterCategories = (event, data) => 
  // {
  //   var a = this.state.categories.filter(function(cat) { return this.indexOf(cat.key) > -1;}, this.state.categoryFilter);
    
  //   this.setState(
  //       {          
  //           categoryFilter : data.value,
  //           filteredCategories: a
  //       });
  //       console.log(a);
  // }
 
  getCategoryDropdownOptions = () => {
      var categoriesCopy = this.state.categories.slice();
      var filterList = categoriesCopy.map((category) => {
          return ({key: category.key, text: category.name, value: category.key});        
      });
      filterList.unshift({key: -1, text: 'All', value: -1})
      
      return filterList;
    }
    

  render() {
    const beerSearch = _.debounce((term) => {this.beerSearch(term)}, 500);

    return (
      <div className="App"> 
        <Header beerSearch={beerSearch}/>

        <br/>
        <br/>           

        <Container >
          <div id='search_show_0_cats'>
            <Dropdown 
                  id='category_drop_down'
                  placeholder='Category Filter'                   
                 // multiple
                  fluid
                  options={this.getCategoryDropdownOptions()}
                  onChange={(event, data) => this.setState({categoryFilter: data.value})}
            />

            <Checkbox
              id="categories_checkbox"
              toggle
              label={`${!this.state.showAll ? 'Show' : 'Hide'} 0 beer categories`}
              checked = {this.state.showAll}
              onChange={(event, value) => this.setState({showAll:value.checked})}/>
          </div>

          <MainCategoryDisplay
            categories={this.state.categoryFilter === -1 ? this.state.categories : this.state.categories.filter(x=>x.key === this.state.categoryFilter)}
            beers={this.state.beers}
            showAll={this.state.showAll}
            />               
        </Container>

      </div>
    );
  }
}

export default Index;
