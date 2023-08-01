

  // ex 2


  const TravelPlanner = {
    locations: [],
  
    // Method to check if a location with the given name already exists
    locationExists: function (name) {
      return this.locations.some((location) => location.name === name);
    },
  
    // Method to add a new location to the planner
    addLocation: function (name, locationInfo) {
      if (this.locationExists(name)) {
        console.log(`Error: Location "${name}" already exists.`);
        return;
      }
  
      const newLocation = {
        name: name,
        description: locationInfo.description,
        bestTimeToVisit: locationInfo.bestTimeToVisit,
        localCuisine: locationInfo.localCuisine,
      };
  
      this.locations.push(newLocation);
      console.log(`Location "${name}" added successfully.`);
    },
  
    // Method to get all locations in the planner
    getAllLocations: function () {
      return this.locations;
    },
  };
  
 