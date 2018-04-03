$( document ).ready(function() {
$(".optional-temp").click(function(){
        $(".temp").toggleClass("hidden");
        $(".optional-temp").toggleClass("alt");
    });
if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			const lat = "lat=" + position.coords.latitude;
			const lon = "lon=" + position.coords.longitude;
			getWeather(lat, lon);
		});
	} else alert("Geolocation is not supported by this browser.");
});

// function getWeather(lat, lon) {
// 	$.ajax({
// 		url: "https://fcc-weather-api.glitch.me/api/current?" + lat + "&" + lon,
// 		success: function(result) {
//       		const desc = result.weather[0].main;
// 	  		$("#c").text(Math.round(result.main.temp));
// 	  		$("#f").text(Math.round(result.main.temp * 9 / 5 + 32));
// 			$("#city").text(result.name);
// 			$("#country").text(result.sys.country);
// 			$("#desc").text(desc);
//       		$('.wi-day-' + desc.toLowerCase()).removeClass('hidden');
// 			}
// 		});
// }

//FETCH API
function getWeather(lat, lon) {
let url = "https://fcc-weather-api.glitch.me/api/current?" + lat + "&" + lon;
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Here's a list of repos!
    console.log(data)
  });
}

// function getWeather(lat, lon) {
// fetch("https://fcc-weather-api.glitch.me/api/current?" + lat + "&" + lon)
//   .then(resp => resp.json());
//   .then(data => {
//   	console.log(data)
//       		const desc = data.weather[0].main;
// 	  		document.querySelector("#c").innerHTML(Math.round(data.main.temp));
// 	  		document.querySelector("#f").innerHTML(Math.round(data.main.temp * 9 / 5 + 32));
// 			document.querySelector("#city").innerHTML(data.name);
// 			document.querySelector("#country").innerHTML(data.sys.country);
// 			document.querySelector("#desc").innerHTML(desc);
//       		document.querySelector('.wi-day-' + desc.toLowerCase()).classList.remove('hidden');
// 			});
// }
