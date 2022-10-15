$(document).ready(() => {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://weatherapi-com.p.rapidapi.com/forecast.json?q=Seattle&days=5&dt=${new Date()}`,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "f815fbac89msh4d641516a677c7fp1cd9a8jsnd3017f41442f",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response.forecast.forecastday[0]);
        $('div.forecast').html(
            `<div class='forecastday'>
            
            </div>
            <div class='forecastday'></div>
            <div class='forecastday'></div>`
            )
        console.log($('div.forecast').html())
        })
    });

const searchButton = document.getElementById('search-addon');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
    const inputValue = searchInput.value;
    alert(inputValue);
});