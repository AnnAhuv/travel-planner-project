let travelData = {
    destinations: ["Paris", "London", "New York", "Tokyo", "Sydney"],
    flights: [
      { flightNumber: "AA123", destination: "New York", duration: "8h 15m" },
      { flightNumber: "BA456", destination: "London", duration: "7h 30m" },
      { flightNumber: "AF789", destination: "Paris", duration: "9h 20m" },
      { flightNumber: "JL012", destination: "Tokyo", duration: "13h 45m" },
      { flightNumber: "QF345", destination: "Sydney", duration: "22h 35m" },
    ],
  };
  
  // 1. Retrieve Destinations
  const getDestinations = (destinations) => destinations;
  
  // 2. Filter Flights by Destination
  const filterFlightsByDestination = (flights, destination) =>
    flights.filter((flight) => flight.destination === destination);
  
  // 3. Calculate Total Flight Duration
  const getFlightDurationInSeconds = (duration) => {
    const [hours, minutes] = duration.split("h ");
    return parseInt(hours) * 3600 + parseInt(minutes) * 60;
  };
  
  const calculateTotalFlightDuration = (flights) =>
    flights.reduce(
      (totalDuration, flight) =>
        totalDuration + getFlightDurationInSeconds(flight.duration),
      0
    );
  
  // 4. Combine Flight Numbers and Destinations
  const combineFlightNumbersAndDestinations = (flights) =>
    flights.map((flight) => `${flight.flightNumber} - ${flight.destination}`);
  
  // 5. Update Flight Duration
  const updateFlightDuration = (flights, newDuration, flightNumber) =>
    flights.map((flight) =>
      flight.flightNumber === flightNumber
        ? { ...flight, duration: newDuration }
        : flight
    );
  
  // 6. Filter Flights by Duration
  const filterFlightsByDuration = (flights, minDuration) =>
    flights.filter(
      (flight) => getFlightDurationInSeconds(flight.duration) >= minDuration
    );
  
  // 7. Retrieve Flight Numbers
  const getFlightNumbers = (flights) => flights.map((flight) => flight.flightNumber);
  
  // 8. Sort Flights by Duration
  const sortFlightsByDuration = (flights) =>
    flights.sort(
      (flightA, flightB) =>
        getFlightDurationInSeconds(flightA.duration) -
        getFlightDurationInSeconds(flightB.duration)
    );
  
  // 9. Retrieve Flight Destinations
  const getFlightDestinations = (flights) =>
    flights.map((flight) => flight.destination);
  