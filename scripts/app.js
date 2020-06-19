const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector(".time-of");
const icon = document.querySelector(".icon img");
const button = document.querySelector(".location-track");

const updateUI = (data) => {
  const { cityDetails, weather } = data;

  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;

  details.innerHTML = `
    <h5>${cityDetails.EnglishName}</h5>
     <div class="weath">${weather.WeatherText}</div>
      <div class="temp">
      <span class="icon"><img src=${iconSrc} alt="weather icon"></span>
        <span class="nums">${weather.Temperature.Metric.Value}&deg;C</span>
        
      </div>
  `;

  if (weather.IsDayTime) {
    time.classList.add("day");
    time.classList.remove("night");
  } else if (!weather.IsDayTime) {
    time.classList.add("night");
    time.classList.remove("day");
  }

  card.classList.contains("hide") ? card.classList.remove("hide") : null;
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return {
    cityDetails,
    weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});

button.addEventListener("click", (e) => {
  e.preventDefault();

  getIP().then((data) => {
    updateCity(data.city)
      .then((data) => updateUI(data))
      .catch((err) => console.log(err));
  });
});
