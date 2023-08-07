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
      if (index !== -1) {
        this.activities.splice(index, 1);
      }
    }
  
    }

  