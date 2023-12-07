const apiKEY = "ENTER YOUR API KEY";
const apiURL = "ENTER THE API URL";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-icon")

async function checkWeather(city) {
  const res = await fetch(apiURL + city + `&appid=${apiKEY}`);

  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await res.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherImage.src = "assets/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherImage.src = "assets/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherImage.src = "assets/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherImage.src = "assets/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherImage.src = "assets/images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    

  }
}



searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});