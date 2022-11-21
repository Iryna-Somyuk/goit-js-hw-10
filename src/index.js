import './css/styles.css';
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
//console.log(input);
input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch() {
    const evtValue = input.value.trim();
    //console.log(evtValue);
    searchCountries(evtValue).then(data => createCountriesMarkUp(data))
   
}
function searchCountries(name) {
 const BASE_URL = 'https://restcountries.com/v3.1/name/';
   fetch(`${BASE_URL}${name}?fields=name,capital,currencies,population,flags.svg,languages`)
   .then(resp => {
    if(!resp.ok) {
        thow new Error(resp.stu)
    }
   })
}
