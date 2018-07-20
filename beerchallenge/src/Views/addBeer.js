import React, {Component} from 'react'
import * as Endpoints from '../Api/endpoints';
import '../css/App.css';
import {NavLink, withRouter} from 'react-router-dom';
import AddBeer from '../Components/AddBeer'

class addBeer extends Component{
    constructor(props){
        super(props);
        this.state = {categories: []}
    }
    
    async componentDidMount(){
        const categories = await Endpoints.getAllCategories();
        this.setState({categories} )            
     }

    addBeer = async (beer) => {
        console.log('BEREEEER BELOWW')
        console.log(beer);
        var resp = await Endpoints.addBeer(beer);
        console.log(resp);
    }

    render()
    {
        return(        
            <div>
                <header className="App-header">
                        <h1 className="App-title"> 
                            <NavLink id="header_nav_link" to='/' > Beer Finder!</NavLink>
                        </h1>                         
                </header>
                <br/>
                <AddBeer categories={this.state.categories} addBeer={this.addBeer}/>   
            
            </div>                
          );
    }
}

export default addBeer;