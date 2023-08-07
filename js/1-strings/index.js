// 1. City Name Capitalization

function cityNameCapitalization(cityName) {
  let titleCaseCityName = cityName;
  if (cityName.includes(" ")) {
    let spaceIndex = cityName.indexOf(" ");
    titleCaseCityName =
      cityName.slice(0, spaceIndex + 1) +
      cityName.charAt(spaceIndex + 1).toUpperCase() +
      cityName.slice(spaceIndex + 2);
  }
  titleCaseCityName =
    titleCaseCityName[0].toUpperCase() + titleCaseCityName.slice(1);
  return titleCaseCityName;
}

// console.log(cityNameCapitalization("atlantis"));
// console.log(cityNameCapitalization("new york"));

// 2. Flight Search

function searchDestination(destinations, searchQuery) {
  for (let d of destinations) {
    if (d.includes(searchQuery)) {
      return d;
    }
  }
}

// console.log(searchDestination( ["New York", "Tokyo", "Paris", "London"], "on"));

// 3. Flight Code Format

function swapFlightCode(flightCode) {
  let code = flightCode.slice(0, flightCode.indexOf("-"));
  let number = flightCode.slice(flightCode.indexOf("-") + 1);
  return (flightCode = number + "-" + code);
}

// console.log(swapFlightCode("JFK-123"));

// 4. Flight Duration

function transformFlightDuration(flightDuration) {
  let hours =
    flightDuration[1] === "h" ? flightDuration[0] : flightDuration.slice(0, 2);
  let minutes =
    flightDuration[flightDuration.indexOf(" ") + 2] === "m"
      ? flightDuration[flightDuration.indexOf(" ") + 1]
      : flightDuration.slice(
          flightDuration.indexOf(" ") + 1,
          flightDuration.indexOf(" ") + 3
        );
  return { hours: hours, minutes: minutes };
}

// console.log(transformFlightDuration("3h 45min"));


// 5. Travel Agency Acronym

function agencyAcronym (agencyName) {
  let words = agencyName.split(' ');
  let acronym;

  // return acronym.toUpperCase();
}

console.log(agencyAcronym("Global Travel Agency"));
