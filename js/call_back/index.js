const TravelPlanner = {
    locations: [],
  
    // 2. Adding Locations
    addLocation(name, locationInfo) {
      const existingLocation = this.findLocation(name);
      if (existingLocation) {
        console.error(`Error: Location "${name}" already exists.`);
      } else {
        this.locations.push({ name, ...locationInfo });
        console.log(`Location "${name}" added successfully.`);
      }
    },
  
    // 3. Deleting Locations
    deleteLocation(name) {
      const locationIndex = this.locations.findIndex(
        (location) => location.name === name
      );
      if (locationIndex === -1) {
        console.log(`Location "${name}" not found.`);
      } else {
        this.locations.splice(locationIndex, 1);
        console.log(`Location "${name}" deleted successfully.`);
      }
    },
  
    // 4. Searching Locations
    findLocation(name) {
      return this.locations.find((location) => location.name === name) || null;
    },
  
    // 5. Sorting Locations
    sortLocations() {
      this.locations.sort((a, b) => a.name.localeCompare(b.name));
      console.log("Locations sorted alphabetically.");
    },
  };
  
  // Test for Exercise 2
  console.log("Testing addLocation method:");
  TravelPlanner.addLocation("Paris", {
    description: "The City of Love",
    bestTimeToVisit: "Spring",
    localCuisine: "Croissants and Escargot",
  });
  
  TravelPlanner.addLocation("London", {
    description: "Famous for its iconic landmarks like the Big Ben, London Eye",
    bestTimeToVisit: "Summer",
    localCuisine: "Fish and Chips",
  });
  console.log(TravelPlanner.locations);
  
  // Test for Exercise 3
  console.log("Testing deleteLocation method:");
  TravelPlanner.deleteLocation("London");
  console.log(TravelPlanner.locations);
  
  // Test for Exercise 4
  console.log("Testing findLocation method:");
  console.log(TravelPlanner.findLocation("Paris"));
  
  // Test for Exercise 5
  console.log("Testing sortLocations method:");
  TravelPlanner.addLocation("New York", {
    description: "The city that never sleeps",
    bestTimeToVisit: "Autumn",
    localCuisine: "Pizza and Bagels",
  });
  TravelPlanner.addLocation("Berlin", {
    description: "Famous for its nightlife and history",
    bestTimeToVisit: "Spring",
    localCuisine: "Sausages and Beer",
  });
  TravelPlanner.sortLocations();
  console.log(TravelPlanner.locations);
  