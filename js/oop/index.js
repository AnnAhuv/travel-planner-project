class Location {
    constructor(name, description, activities = []) {
      this.name = name;
      this.description = description;
      this.activities = activities;
    }
  
    addActivity(activity) {
      this.activities.push(activity);
    }

    removeActivity(activity) {
        const index = this.activities.indexOf(activity);
        if (index > -1) {
          this.activities.splice(index, 1);
        }
      }
    
      displayLocation() {
        let activityList = this.activities.join(", ");
        return `Location: ${this.name}\nDescription: ${this.description}\nActivities: ${activityList}`;
      }
    }
  
    
    // USE CASE
  
  
    // Create a new location object
  const beachLocation = new Location(
      "Sandy Beach",
      "A beautiful beach with crystal clear water.",
      ["Swimming", "Sunbathing", "Beach Volleyball"]
    );
    
    // Add activities
    beachLocation.addActivity("Snorkeling");
    beachLocation.addActivity("Beach Party");
    
    // Display the location information
    console.log(beachLocation.displayLocation());
    
    // Remove an activity
    beachLocation.removeActivity("Beach Volleyball");
    
    // Display the updated location information
    console.log(beachLocation.displayLocation());
    
  
  
  
    
    // output
  
  
  
    Location: Sandy Beach
  Description: A beautiful beach with crystal clear water.
  Activities: Swimming, Sunbathing, Beach Volleyball, Snorkeling, Beach Party
  
  Location: Sandy Beach
  Description: A beautiful beach with crystal clear water.
  Activities: Swimming, Sunbathing, Snorkeling, Beach Party
  