let now = new Date();

let h6 = document.querySelector("h6");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednezday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h6.innerHTML = `${day} ${hours}:${minutes}`;

function KnowCity(event) {
  event.preventDefault();
  let SeacrchedInput = document.querySelector("#SearchedCity");
  let selectedCity = document.querySelector(".City");
  selectedCity.innerHTML = `${SeacrchedInput.value}`;
  let apiKey = "2ff29bed3181c3526c35cc5408037f85";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${SeacrchedInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
let form = document.querySelector("#SearchEngine");
form.addEventListener("submit", KnowCity);

function showTemp(response) {
  let selectedCity = document.querySelector(".City");
  selectedCity.innerHTML = `${response.data.name}`;
  let dama = document.querySelector("#Temp");
  let damas = Math.round(response.data.main.temp);
  dama.innerHTML = `${damas}`;
  let toozih = document.querySelector("#description");
  toozih.innerHTML = response.data.weather[0].description;
  //let baresh=document.querySelector("#Precipitation")
  //baresh.innerHTML=`Precipitation:did not find%`
  let rotobat = document.querySelector("#Humidity");
  rotobat.innerHTML = `Humidity:${response.data.main.humidity}%`;
  let baad = document.querySelector("#Wind");
  baad.innerHTML = `Wind:${response.data.wind.speed} mph`;
  console.log(response.data);
}
function showMyCity(position) {
  console.log(position.coords);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "2ff29bed3181c3526c35cc5408037f85";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
function myCity() {
  navigator.geolocation.getCurrentPosition(showMyCity);
}

let button = document.querySelector("button");
button.addEventListener("click", myCity);
