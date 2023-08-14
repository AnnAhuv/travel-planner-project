// 1
const TravelPlanner = {
    locations: [],
  };
  
  function addLocation(nname, description, bestTimeToVisit, localCuisine) {
    const newLocation = {
      name: nname,
      description: description,
      bestTimeToVisit: bestTimeToVisit,
      localCuisine: localCuisine,
    };
    TravelPlanner.locations.push(newLocation);
  }
  
  console.log(TravelPlanner);

  //2

  deleteLocation(nname) {
    const locationIndex = this.locations.findIndex(
      (location) => location.name === nname
    );
    if (locationIndex === -1) {
      console.log(`Location "${nname}" not found.`);
    } else {
      this.locations.splice(locationIndex, 1);
      console.log(`Location "${nname}" deleted successfully.`);
    }
  },

  // 4
  findLocation(nname) {
    return this.locations.find((location) => location.name === nname) || null;
  },

  // 5
  sortLocations() {
    this.locations.sort((a, b) => a.nname.localeCompare(b.nname));
    console.log("Locations sorted alphabetically.");
  },
};