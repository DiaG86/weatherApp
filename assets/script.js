$("#citySearch").on("click", function(event) {

var queryURL ="http://api.openweathermap.org/data/2.5/forecast?q={city name},{state code},+'&count='&appid={e9561b7f2c048c896aca004a3ef59384}"
var city ="your city"
var key= "e9561b7f2c048c896aca004a3ef59384"


$.ajax({
    "url": "queryURL",
    "method": "GET",
    "dataType": "json",
    // "data": {
    //     "q": "city",
    //     "appid": "key",
    //     "units": "imperial",
    //     "cnt": "5"
})

.then(function(response) {
    console.log(response)
})
});
