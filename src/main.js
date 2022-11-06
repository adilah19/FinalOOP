function buttonClicked(){

    var hike = document.getElementById("hike_input").value;
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${hike}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
      
        console.log(data); //output the API into console.
        console.log("City : " + data.name);
        console.log("Country: " + data.sys.country);
        console.log("Temperature in Celsius: " + ((data.main.temp - 273.15).toFixed(2))); 
        console.log("Weather visibility: " + data.visibility);
        console.log("Humidity: " + data.main.humidity); 
        console.log("Pressure: " + data.main.pressure);
        console.log("Wind Speed: " + data.wind.speed);
        console.log("Wind Gust: " + data.wind.gust);
        
        document.getElementById("demo").innerHTML="🎯 City: " + data.name + "<br/>🎯 Country: " + data.sys.country +
                                        "<br/>🎯 Temperature in Celsius: " + ((data.main.temp - 273.15).toFixed(2)) + 
                                        "<br/>🎯 Weather visibility: " + data.visibility  +  "<br/>🎯 Humidity: " + data.main.humidity + 
                                        "<br/>🎯 Wind Speed: " + data.wind.speed + "<br/>🎯 Wind Gust: " + data.wind.gust;
} )

} 

var electron = require('electron');
var {ipcRenderer} =electron;

ipcRenderer.on("item:clear", function(){
    document.getElementById("demo").innerHTML = "";
})