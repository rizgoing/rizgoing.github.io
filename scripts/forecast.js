const key = "VroAI0GWSPug7ID9MfAM15PzI7AKnjhs";

const getWeather = async (id) => {
  const base = "https://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

const getCity = async (city) => {
  const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

const getIP = async () => {
  const base = "https://freegeoip.app/json/";
  const res = await fetch(base);
  const data = await res.json();
  return data;
};
