const api_key = 'd3c39f57206d5904890771c822ffaac3';
//const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
//const ciudad = 'medellin';

const ciudadInput = document.querySelector('.search input[type="text"]');
const ciudadButton = document.querySelector('.search button');

ciudadButton.addEventListener('click', () => {
  const ciudad = ciudadInput.value;
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + ciudad + "&appid=" + api_key;
  //console.log(apiUrl);  

    //esconder error 
    const errorElement = document.querySelector(".error");
    errorElement.style.display = "none";

  fetch(apiUrl)
  .then((response) => response.json())
  .then(data => {

    var weather = data.weather[0].main; //tiempo

    var temperatura = data.main.temp; 
    var temperatura_redondeada = Math.round(temperatura);

    var humedad = data.main.humidity;
    var viento = data.wind.speed;
    var ciudad = data.name;

    console.log("Nombre:", ciudad);
    console.log("tiempo:", weather);
    console.log("Temperatura:", temperatura);
    console.log("Humedad:", humedad);
    console.log("viento:", viento);
    


    //mostrar carta
    document.querySelector('.weather').style.display = 'block';

    document.querySelector('.city').textContent = ciudad;
    document.querySelector('.temp').textContent =`${temperatura_redondeada}°C`;
    document.querySelector('.humidity').textContent = `${humedad}%`;
    document.querySelector('.wind').textContent = `${viento}km/h`;


    var weatherIcon = document.querySelector('.weather-icon');
    switch (weather) {
        case "Clouds":
            weatherIcon.src = 'images/clouds.png';
          break;
        case "Clear":
            weatherIcon.src = 'images/clear.png';
          break;
        case "Rain":
            weatherIcon.src = 'images/rain.png';
            break;
        case "Drizzle":
            weatherIcon.src = 'images/drizzle.png';
            break;
        case "Mist":
            weatherIcon.src = 'images/mist.png';
            break;
        default:
            weatherIcon.src = 'images/rain.png';
            break;
      }

    })
    .catch(error => {

        document.querySelector('.weather').style.display = 'none';

        const errorElement = document.querySelector(".error");
        errorElement.style.display = "block";
    });

});




