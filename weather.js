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
	//var urlString = api + lat + "&" + lon;
	$.ajax({
		url: api + lat + "&" + lon,
		success: function(result) {
    
      var desc = result.weather[0].main;
			$("#temp").text(Math.round(result.main.temp));
			$("#city").text(result.name);
			$("#country").text(result.sys.country);
			$("#desc").text(desc);
      		$('.wi-day-' + desc.toLowerCase()).removeClass('hidden');
			}
		});
}

// function convert(){
// 	result.main.temp * 9 / 5 + 32
// }


