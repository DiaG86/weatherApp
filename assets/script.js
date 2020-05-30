$("#citySearch").on("click", function(event) {

var queryURL ="http://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={e9561b7f2c048c896aca004a3ef59384}"


$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response) {
    console.log(response)
})
});