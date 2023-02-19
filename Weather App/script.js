var loc = document.getElementById("loc");
var country = document.getElementById("country");
var temp_c = document.getElementById("temp_c");
var button = document.getElementById("submit");
var text = document.getElementById("text");
var wind_kph = document.getElementById("wind_kph")
var humidity = document.getElementById("humidity")
var feelslike = document.getElementById("feelslike")
var icon = document.getElementById("icon");
const weather = (word) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b57c3846b9msh17018c25c4c6f33p1c5692jsn0f18df506b4d',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};

	fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + word, options)
		.then((response) => { return response.json() })
		.then((response) => {			
			if(icon.hasChildNodes() === true){
				icon.removeChild(icon.firstChild);
			}		
			loc.innerHTML = response.location.name
			country.innerHTML = response.location.country + " " + response.location.localtime
			temp_c.innerHTML = response.current.temp_c + "°C"
			text.innerHTML = response.current.condition.text
			wind_kph.innerHTML = "Wind Speed " + response.current.wind_kph + " km/h"
			humidity.innerHTML = "Humidity " + response.current.humidity
			feelslike.innerHTML = "Feelslike " + response.current.feelslike_c + "°C"
			var img = document.createElement("img")
			img.src = "https:" + response.current.condition.icon
			icon.appendChild(img)			
		})
		.catch(err => console.error(err));
};

button.addEventListener("click", (e) => {
	//this will not let the page to reload and let the changes disappear
	e.preventDefault();
	weather(wordSearched.value);
});
