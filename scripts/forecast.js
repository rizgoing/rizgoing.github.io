const key = "	d2IBrwpExUKV8M9D15qgzEm4xG3AWmYo";

const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

const getIP = async () => {
  const base = "https://ip-api.com/json/";
  const res = await fetch(base);
  const data = await res.json();
  return data;
};
