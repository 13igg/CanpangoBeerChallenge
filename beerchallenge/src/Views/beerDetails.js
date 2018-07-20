import React, {Component} from 'react'
import * as Endpoints from '../Api/endpoints';
import '../css/App.css';
import {NavLink, withRouter } from 'react-router-dom';
import BeerDetails from '../Components/BeerDetails'

class beerDetails extends Component{
    constructor(props){
        super(props);
        this.state = {category: {}, beer: {}}
    }

    //I am not a fan of the re-call to get data, considering I have it all on the route-from component
    //TODO: Pass these in as props from the router, or, use a global context to store them
    async componentDidMount(){
       const beer = await Endpoints.getBeerById(this.props.match.params.beerId)
       const category = await Endpoints.getCategoryById(beer.category.replace( /[^0-9]/g, '' ))
        
       this.setState({category, beer})            
    }

    deleteBeer = async () => {
        console.log(this.state)
//        var resp = await Endpoints.deleteBeer(this.state.beer.url)
//        console.log(resp)

        this.props.history.push('/');
    }

    render(){
    return(
            <div>
                <header className="App-header">
                        <h1 className="App-title"> 
                            <NavLink id="header_nav_link" to='/' > Libations Tracker!</NavLink>
                        </h1>                         
                </header>
                <BeerDetails beer={this.state.beer} category={this.state.category} deleteBeer={this.deleteBeer}/>   
            </div>
        )
    }
}

export default withRouter(beerDetails);