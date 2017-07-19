/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';
(function() {

	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
	var apiKey = "d8355e481598585f7680a318c8bc7d2e";
	var tempUnits = "imperial"

	getWeatherAjax('washington', 'dc');
	getWeatherGet('washington', 'dc');

	//using AJAX
	function getWeatherAjax(city, state) {
	 $.ajax({
        type: "GET",
        url: weatherUrl + city + state + "&units=" + tempUnits + "&appid=" + apiKey,
        dataType: "json",
        success: function (data) {
            console.log(data);
            $('#answer').html(city + ', ' + state + " temp is "+ data.main.temp+ " F");
        },
        error: function (errorMessage) {
        }
    });

	}

	//using GET
	function getWeatherGet(city, state) {
	 var url = weatherUrl + city + state + "&units=" + tempUnits + "&appid=" + apiKey;
	 $.get( url, function( data) {
	      // We get the data back from the request in the parameter we pass in the function
	      console.log(data);
	      $('#answer').html(city + ', ' + state + " temp is "+ data.main.temp + " F");

	  });

	}

	$('#input-submit-get').on('click', function(e) {
		e.preventDefault();
		getWeatherGet($('#city').val(), $('#state').val());
	});

	$('#input-submit-ajax').on('click', function(e) {
		e.preventDefault();
		getWeatherAjax($('#city').val(), $('#state').val());
	});

})();