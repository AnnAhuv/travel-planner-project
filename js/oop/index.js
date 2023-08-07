class Location {
    constructor(name, description, activities = []) {
      this.name = name;
      this.description = description;
      this.activities = activities;
    }
  
    addActivity(activity) {
      this.activities.push(activity);
    }

   }