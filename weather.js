var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
$( document ).ready(function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var lat = "lat=" + position.coords.latitude;
			var lon = "lon=" + position.coords.longitude;
			getWeather(lat, lon);
		});
	} else alert("Geolocation is not supported by this browser.");
	

});


function getWeather(lat, lon) {
	var urlString = api + lat + "&" + lon;
	$.ajax({
		url: urlString,
		success: function(result) {
			$("#temp").text(result.main.temp);
			$("#city").text(result.name);
			$("#country").text(result.sys.country);
			$("#desc").html(result.weather[0].main);
			$("#showIcon").html(result.weather[0].icon);
			}
		});
}

// function iconCall(){
// 	switch (){
// 		case //var is equal to text(result.weather[0].id);
// 		//remove hidden class from icon;
// 		break;
// 	}
// }


