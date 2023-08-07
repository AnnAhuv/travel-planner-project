// 1 

function createTravelPlanner() {
    const destinations = [];
  
    function addDestination(destinationName) {
      destinations.push(destinationName);
      console.log(`Destination "${destinationName}" added.`);
    }
  
    function removeDestination(destinationName) {
      const index = destinations.indexOf(destinationName);
      if (index !== -1) {
        destinations.splice(index, 1);
        console.log(`Destination "${destinationName}" removed.`);
      } else {
        console.log(`Destination "${destinationName}" not found.`);
      }
    }
  
    function getDestinations() {
      return destinations;
    }
  
    return {
      addDestination,
      removeDestination,
      getDestinations
    };
  }
  
  
  //  2  

  function createTravelPlanner() {
    const destinations = [];
  
    function addDestination(destinationName) {
      destinations.push(destinationName);
      console.log(`Destination "${destinationName}" added.`);
    }
  
    function removeDestination(destinationName) {
      const index = destinations.indexOf(destinationName);
      if (index !== -1) {
        destinations.splice(index, 1);
        console.log(`Destination "${destinationName}" removed.`);
      } else {
        console.log(`Destination "${destinationName}" not found.`);
      }
    }
  
    function getDestinations() {
      return destinations;
    }
  
    return {
      addDestination,
      removeDestination,
      getDestinations
    };
  }
  
  
  
  //  3  

  function createTravelPlannerWithDetails() {
    const destinations = [];
  
    function addDestinationWithDetails(destinationName, destinationDetails) {
      destinations.push({ name: destinationName, details: destinationDetails });
      console.log(`Destination "${destinationName}" with details added.`);
    }
  
    function removeDestination(destinationName) {
      const index = destinations.findIndex(dest => dest.name === destinationName);
      if (index !== -1) {
        destinations.splice(index, 1);
        console.log(`Destination "${destinationName}" and its details removed.`);
      } else {
        console.log(`Destination "${destinationName}" not found.`);
      }
    }
  
    function getDestinationsWithDetails() {
      return destinations;
    }
  
    return {
      addDestinationWithDetails,
      removeDestination,
      getDestinationsWithDetails
    };
  }
  
    

  // 4  

  function createSearchableTravelPlanner() {
    const destinations = [];
  
    function addDestinationWithDetails(destinationName, destinationDetails) {
      destinations.push({ name: destinationName, details: destinationDetails });
      console.log(`Destination "${destinationName}" with details added.`);
    }
  
    function removeDestination(destinationName) {
      const index = destinations.findIndex(dest => dest.name === destinationName);
      if (index !== -1) {
        destinations.splice(index, 1);
        console.log(`Destination "${destinationName}" and its details removed.`);
      } else {
        console.log(`Destination "${destinationName}" not found.`);
      }
    }
  
    function getDestinationsWithDetails() {
      return destinations;
    }
  
    function sortDestinations() {
      destinations.sort((a, b) => a.name.localeCompare(b.name));
      console.log("Destinations sorted alphabetically.");
    }
  
    function searchDestination(destinationName) {
      const destination = destinations.find(dest => dest.name === destinationName);
      if (destination) {
        console.log(`Destination "${destinationName}" found.`);
        return destination;
      } else {
        console.log(`Destination "${destinationName}" not found.`);
        return null;
      }
    }
  
    return {
      addDestinationWithDetails,
      removeDestination,
      getDestinationsWithDetails,
      sortDestinations,
      searchDestination
    };
  }
  
  
  