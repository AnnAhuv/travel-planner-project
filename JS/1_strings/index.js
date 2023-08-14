
//exc1
function convertToTitleCase(str) {
    if (!str) {
        return ""
    }
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }
  
  console.log(convertToTitleCase('welcome to my article'));
  console.log(convertToTitleCase('THE avengers'));

//exc2
function searchInventory(inventory, query) {
    return inventory.filter(item => item.toLowerCase().includes(query.toLowerCase())); 
}
  
  console.log(searchInventory(['Sword', 'Shield', 'Potion'], 'sh')); 

  //exc3

  function formatFlightCode(flightCode) {
    const parts = flightCode.split('-'); // CR - why not destructure?
  
    const formattedCode = `${parts[1]}-${parts[0]}`;
  
    return formattedCode;
  }
  
 
  const flightCode = "JFK-123";
  const formattedFlightCode = formatFlightCode(flightCode);
  console.log(formattedFlightCode); 

  //exc4
  function parseFlightDuration(durationString) {
    const [hoursPart, minutesPart] = durationString.split(' ');
  
    const hours = parseInt(hoursPart);
    const minutes = parseInt(minutesPart);
  
    return { hours, minutes };
  }
  
  const durationString = "3h 45min";
  const durationObject = parseFlightDuration(durationString);
  console.log(durationObject);  
  
  //exc5
  function agencyAcronym (agencyName) {
    let words = agencyName.split(' ');
    let acronym;
  
    // return acronym.toUpperCase();
  }
  
  console.log(agencyAcronym("Global Travel Agency"));