import 'isomorphic-fetch'

const rootUrl = 'http://apichallenge.canpango.com/';

const beerSearch = 'beers/search/'
const beersUri = 'beers/'
const categoriesUri = 'categories/'
const categoryUri = 'category/'

//Helper Functions
async function httpGet(url){
    return fetch(url).then(response => response.json());
}

async function httpPost(url, body){
    return fetch(url, {
            headers: { 
                'Content-Type': 'application/json'   
            },
            method: 'post',
            body: JSON.stringify(body)            
        })
        .then((response) => response.json());
}

async function httpDelete(url){
    return fetch(url, {method: 'delete'})
        .then((response) => response.json());
}

//Beer
export function getAllBeers(){
    console.log(`getting all beers from : ${rootUrl + beersUri}`)
    return httpGet(rootUrl+beersUri)
}

export function getBeerById(id){
    console.log(`getting beers from : ${rootUrl + beersUri+id}`)
    return httpGet(rootUrl+beersUri+id)
}

export function searchForBeer(query){
    console.log(`searching for beer: ${query} : at ${beerSearch}?q=${query}`);
    return httpGet( `${rootUrl+beerSearch}?q=${query}`);
}

export function deleteBeer(url){
    console.log(`deleting beer: ${url}`)
    httpDelete(url)
}

export function addBeer(beer){
    console.log(`adding beer to : ${rootUrl+beersUri}`)
    console.log(beer);
    httpPost(rootUrl+beersUri, beer)
}


//Category
export function getAllCategories(){
    console.log(`getting all categories from : ${rootUrl + categoriesUri}`)
    return httpGet(rootUrl+categoriesUri)
}

export function getCategoryById(id){
    console.log(`getting category from : ${rootUrl + categoriesUri +id}`)
    return httpGet(rootUrl+categoryUri+id)
}

export function deleteCategory(url){
    console.log(`deleting category: ${url}`)
    httpDelete(url)
}