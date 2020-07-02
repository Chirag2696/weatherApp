
window.addEventListener('load',getLocation);
function getLocation(){
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
}
else
document.querySelector(".notification p").innerHTML="Geolocation is not supported";
}

function showPosition(position){
     let lat = position.coords.latitude;
    
     let long = position.coords.longitude;
    getWeather(lat,long);
    
} 


    
 function getWeather(lat,long){
    
    
    //const API_KEY = 989b30b8fc6044b9fe95cf03ecc78037;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=989b30b8fc6044b9fe95cf03ecc78037`;
 fetch(url)
 .then(resp=>resp.json())
 .then(data=>console.log(data))
 //.then(function(data){ console.log(data);
    //document.querySelector(".temperature p").innerHTML=
 //})
 .catch(error=>{console.log('error')})
 }