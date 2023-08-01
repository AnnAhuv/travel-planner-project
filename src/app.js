// 5. Sorting Locations

const sortLocations = function (locations) {
  this.locations.name.sort();
};

// 7. Show All Locations

const showAll = function (locations) {
  for (const location of locations) {
    console.log(
      `${this.location.name} - 
      Description: ${this.location.description}, 
      Best Time To Visit: ${this.location.bestTimeToVisit}, 
      Local Cuisine: ${this.location.localCuisine}`)
    }
  }

  /*Constructing a Travel Planner
Create an object TravelPlanner .
 This object should contain an empty array called locations .
 Each element of the locations array is an object 
 which contains thefollowing information about the location:
  name , description , bestTimeToVisit ,and localCuisine .
*/
//-----------------------------------------------------------------------





const TravelPlanner = {
  locations: [],
};




//---------------------------------------------------------




//exc_1    Function to add a new location to the 'locations' array.
function addLocation(name, description, bestTimeToVisit, localCuisine) {
  const newLocation = {
    name: name,
    description: description,
    bestTimeToVisit: bestTimeToVisit,
    localCuisine: localCuisine,
  };
  TravelPlanner.locations.push(newLocation);
};


//-------------------------------------------------------------

 //exc_6
   // Function to edit a location in the 'locations' array.
// editLocation(locationName, updatedInfo) {
//   let found = false;
//   this.locations.forEach((location, index) => {
//     if (location.name === locationName) {
//       this.locations[index] = { ...location, ...updatedInfo };
//       found = true;
//     }
//   });

//   if (found) {
//     console.log(`Location '${locationName}' has been updated.`);
//   } else {
//     console.log(`Location '${locationName}' not found. No changes were made.`);
//   }
// };
//--------------------------------------------------------

//exc_8
// Method to filter locations by description containing the provided string (case-insensitive).
// filterLocations(searchString) {
//   if (!searchString) {
//     console.log("Please provide a valid search string.");
//     return [];
//   }

//   const filteredLocations = this.locations.filter((location) =>
//     location.description.toLowerCase().includes(searchString.toLowerCase())
//   );

//   return filteredLocations;
// },
// };

//--------------------------------------------------------

//exc_10

// /*
// const locations = [
// {
//   name: "Location 1",
//   description: "This is location 1",
//   ratings: [4, 5, 3, 5, 4] // An array of ratings for Location 1
// },
// {
//   name: "Location 2",
//   description: "This is location 2",
//   ratings: [5, 5, 5, 4, 5] // An array of ratings for Location 2
// },
// // ... (more locations with similar structure)
// ];

//------------------------------------------------------
// class TravelPlanner {
//   constructor() {
//     this.locations = []; // Assume this.locations is already populated with data
//   }

//   getTopRatedLocation() {
//     if (this.locations.length === 0) {
//       return []; // Return an empty array if there are no locations
//     }

//     let highestAverageRating = 0;
//     let topRatedLocations = [];

//     for (const location of this.locations) {
//       if (location.ratings.length > 0) {
//         const averageRating = location.ratings.reduce((sum, rating) => sum + rating, 0) / location.ratings.length;
        
//         if (averageRating > highestAverageRating) {
//           highestAverageRating = averageRating;
//           topRatedLocations = [location];
//         } else if (averageRating === highestAverageRating) {
//           topRatedLocations.push(location);
//         }
//       }
//     }

//     return topRatedLocations;
//   }
// }

// Example usage:
// const travelPlanner = new TravelPlanner();
// Assume travelPlanner.locations is populated with data

// const topRatedLocations = travelPlanner.getTopRatedLocation();
// console.log(topRatedLocations);