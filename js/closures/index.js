// 1. Exercise 1: Creating a Travel Planner

const createTravelPlanner = () => {
  const destinations = [];

  const addDestination = (destinationName) => {
    destinations.push(destinationName);
    console.log(`${destinationName} added to the travel planner.`);
  }
  const removeDestination = (destinationName) => {
    if (destinations.find(destination => destination === destinationName)) {
      destinations.splice(destinations.indexOf(destinationName), 1)
      console.log(`${destinationName} removed from the travel planner.`);
    } else {
      console.log(`${destinationName} is not in the travel planner.`);
    }
  }
  const getDestinations = () => destinations;

  return {addDestination, removeDestination, getDestinations}
}

// Using createTravelPlanner function
let myTravelPlanner = createTravelPlanner();

// Adding destinations
myTravelPlanner.addDestination("Paris");
// Output: "Paris added to the travel planner."
myTravelPlanner.addDestination("London");
// Output: "London added to the travel planner."

// Removing a destination
myTravelPlanner.removeDestination("Paris");
// Output: "Paris removed from the travel planner."

// Attempting to remove a non-existing destination
myTravelPlanner.removeDestination("Rome");
// Output: "Rome is not in the travel planner."

// Getting the list of destinations
console.log(myTravelPlanner.getDestinations());
// Output: ["London"]
// 
// 
console.log(`____________________________________`);
// 2. Exercise 2: Adding Details to Destinations

const createTravelPlannerWithDetails = () => {
  const DestinationsWithDetails = [];

  const addDestinationWithDetails = (destinationName, destinationDetails) => {
    DestinationsWithDetails.push({destination: destinationName, details: destinationDetails});
    console.log(`${destinationName} added to the travel planner with details.`);
  }
  const removeDestination = (destinationName) => {
    const destinationToRemove = DestinationsWithDetails.find(d => d.destination === destinationName);
    if (destinationToRemove) {
      DestinationsWithDetails.splice(DestinationsWithDetails.indexOf(destinationToRemove), 1)
      console.log(`${destinationName} removed from the travel planner.`);
    } else {
      console.log(`${destinationName} is not in the travel planner.`);
    }
  }
  const getDestinationsWithDetails = () => DestinationsWithDetails;

  return {addDestinationWithDetails, removeDestination, getDestinationsWithDetails}
}

// Using createTravelPlannerWithDetails function
let myDetailedTravelPlanner = createTravelPlannerWithDetails();

// Adding destinations with details
myDetailedTravelPlanner.addDestinationWithDetails("Paris", { attractions: ["Eiffel Tower", "Louvre Museum"] });
// Output: "Paris added to the travel planner with details."
myDetailedTravelPlanner.addDestinationWithDetails("London", { attractions: ["London Eye", "British Museum"] });
// Output: "London added to the travel planner with details."

// Removing a destination
myDetailedTravelPlanner.removeDestination("Paris");
// Output: "Paris removed from the travel planner."

// Attempting to remove a non-existing destination
myDetailedTravelPlanner.removeDestination("Rome");
// Output: "Rome is not in the travel planner."

// Getting the list of destinations with details
console.log(myDetailedTravelPlanner.getDestinationsWithDetails());
// Output: [{ destination: "London", details: { attractions: ["London Eye", "British Museum"] }}]