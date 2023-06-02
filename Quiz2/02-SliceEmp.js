// terdapat array employees
const cities = [
  "merak",
  "tangerang",
  "jakarta",
  "bogor",
  "cianjur",
  "cimahi",
  "bandung",
];

const bogor = cities.indexOf("bogor");

const citiesSliced = [...cities.slice(0, bogor), ...cities.slice(bogor + 1)];

function citiesSlice(arrays, cityBetween) {
  if (Array.isArray(arrays)) {
    const bogor = arrays.indexOf(cityBetween);

    if (cityBetween !== -1) {
      return [...arrays.slice(0, bogor), ...arrays.slice(bogor + 1)];
    }
  }
  return arrays;
}

console.log(citiesSlice(cities, "jakarta"));
//['merak', 'tangerang', 'bogor', 'cianjur', 'cimahi', 'bandung']
