var cityInput = document.querySelector("#city-text");
var cardBody = document.querySelector("#card-body");
var cityList = document.querySelector("#city-list");
var cities =["Charlotte"]

renderCities();

function renderCities() {
  // Clear cityList element
  cityList.innerHTML = "";
  

  // Render a new li for each city
  for (var i = 0; i < cities.length; i++) {
    var city = cities[i];

    var li = document.createElement("li");
    li.textContent = cities;
    li.setAttribute("data-index", i);

    li.appendChild(button);
    cityList.appendChild(li);
  }
}

$("#city-text").on("click", function(event) {

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

    var cityText = cityInput.value.trim();
      
    // Return from function early if submitted todoText is blank
    if (cityText === "") {
        return;
      }
    
      // Add new todoText to todos array, clear the input
      cities.push(cityText);
      cityInput.value = "";
    
      // Re-render the list
      renderTodos();
   

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


