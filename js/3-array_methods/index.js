// 1. Retrieve Destinations

function  travelDestinations (destinations) {
  return [...destinations];
}

let destinations =  ["New York", "London", "Paris"];

// console.log(travelDestinations(destinations));


// 2. Filter Flights by Destination

function flightsByDestination (flights, destination) {
  return flights.filter(flight => flight.destination === destination);
}

let flights = [{ destination: "New York" }, { destination: "London" }, {
destination: "Paris" }];
let destination = "London";

// console.log(flightsByDestination(flights, destination));


// 3. Calculate Total Flight Duration

function totalFlightsDuration (flights) {
  let durationInSec = flights.map(flight => flight.duration).map(duration => {
    const [hours, minutes] = duration.split("h ");
  return parseInt(hours) * 3600 + parseInt(minutes) * 60;
  })
  return durationInSec.reduce((total, flightDuration) => total + flightDuration, 0);
}

let flights2 = [{ duration: "3h 30m" }, { duration: "2h 45m" }, { duration: "1h 15m" }];

// console.log(totalFlightsDuration(flights2));


// 4. Combine Flight Numbers and Destinations

function combineNumberDestination (flights) {
  return flights.map(flight => [flightNumber, flightDestination] = [flight.flightNumber, flight.destination])
  .map(flight => flight.toString()).map(flight => [flightNumber, flightDestination] = flight.split(',').join('-'));
}

let flights3 = [{ flightNumber: "FL001", destination: "New York" }, {
  flightNumber: "FL002", destination: "London" }];  

  console.log(combineNumberDestination(flights3));
