// 1. Simple Arrow Function Conversion

 const getDestinationName = destination => destination.name;
 

//  2. Control Flow in Arrow Functions

 const getTravelStatus = status => {
  if (status === "Visited") {
  return "You have visited this place";
  } else if (status === "Upcoming") {
  return "You are planning to visit this place";
  } else {
  return "This place is in your wishlist";
  }
 }


//  3. Arrow Functions with Multiple Operations

 const totalBudget = destination => {
  let totalBudget = 0;
  for (let i = 0; i < destinations.length; i++) {
  totalBudget += destinations[i].budget;
  }
  return 'Total travel budget is ' + totalBudget;
 }


//  4. Arrow Functions as Callbacks

let sortedDestinations = destinations.sort((a, b) => b.budget - a.budget);


// 5. Implicit Return with Arrow Functions

const getDestinationNames = destinations => destinations.map(destination => destination.name);

 