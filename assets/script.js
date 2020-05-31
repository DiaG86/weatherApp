$("#citySearch").on("click", function(event) {

    var APIKey= "e9561b7f2c048c896aca004a3ef59384"
    var queryURL ="http://api.openweathermap.org/data/2.5/forecast?q={city name},{state code},&appid=" + APIKey;



$.ajax({
    url: queryURL,
    method: "GET"
  })

.then(function(response) {
    console.log(response);
    // Log the queryURL
    console.log(queryURL);

 // Transfer content to HTML
 $(".city").html("<h1>" + response.name + " Weather Details</h1>");
 $(".wind").text("Wind Speed: " + response.wind.speed);
 $(".humidity").text("Humidity: " + response.main.humidity);
 
 // Convert the temp to fahrenheit
 var tempF = (response.main.temp - 273.15) * 1.80 + 32;

 $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);

})
});
