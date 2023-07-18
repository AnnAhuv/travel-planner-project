
// ex 1


function capitalCityName(cityName) {
    const words = cityName.split(' ');
  
    const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  
    const titleCaseCityName = titleCaseWords.join(' ');
  
    return titleCaseCityName;
  }
  
  // bdika
const cityName = 'los angles'
const TenLaTitle = capitalCityName(cityName);
console.log(TenLaTitle);
  

// ex 2

function searchFlights(destinations, query) {
    const matchingDestinations = destinations.filter(destination =>
      destination.toLowerCase().includes(query.toLowerCase())
    );
  
    return matchingDestinations;
  }
  
  // bdika
  const destinations = ["New York", "Tokyo", "Paris", "London"];
  const query = "on";
  const result = searchFlights(destinations, query);
  console.log(result); // Output: ["London"]

  
  

  // ex 3

  function formatFlightCode(flightCode) {
    const parts = flightCode.split('-');
  
    const formattedCode = `${parts[1]}-${parts[0]}`;
  
    return formattedCode;
  }
  
  // bdika
  const flightCode = "JFK-123";
  const formattedFlightCode = formatFlightCode(flightCode);
  console.log(formattedFlightCode);  
  




  // ex 4

  function parseFlightDuration(durationString) {
    const [hoursPart, minutesPart] = durationString.split(' ');
  
    const hours = parseInt(hoursPart);
    const minutes = parseInt(minutesPart);
  
    return { hours, minutes };
  }
  
  // bdika
  const durationString = "3h 45min";
  const durationObject = parseFlightDuration(durationString);
  console.log(durationObject);  

  


  // ex 5 

  function generateAcronym(agencyName) {
    const words = agencyName.split(' ');
  
    const acronym = words.map(word => word.charAt(0).toUpperCase()).join('');
  
    return acronym;
  }
  
  // bdika
  const agencyName = "Global Travel Agency";
  const acronym = generateAcronym(agencyName);
  console.log(acronym); 
  


