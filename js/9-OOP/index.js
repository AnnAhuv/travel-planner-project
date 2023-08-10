// Exercise 1: The Location superclass

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
    let activityIndex = this.activities.indexOf(activity);
    if (activityIndex > -1) {
      this.activities.splice(activityIndex, 1);
    } else {
      return `${activity} is not in the list.`;
    }
  }

  displayLocation() {
    return `${this.name} - ${
      this.description
    }. Activities: ${this.activities.join(", ")}.`;
  }
}

// Exercise 2: The Origin and Destination subclasses

class Origin extends Location {
  constructor(name, description, dateOfDeparture, activities) {
    super(name, description, activities);
    this.dateOfDeparture = dateOfDeparture;
  }
}

class Destination extends Location {
  constructor(name, description, dateOfArrival) {
    super(name, description);
    this.dateOfArrival = dateOfArrival;
  }
}

// Exercise 3: The Transport superclass

class Transport {
  constructor(type, duration, cost) {
    this.type = type;
    this.duration = duration;
    this.cost = cost;
  }

  changeDuration(newDuration) {
    this.duration = newDuration;
  }

  changeCost(newCost) {
    this.cost = newCost;
  }

  displayTransport() {
    return `Type: ${this.type}, duration: ${this.duration}, cost: ${this.cost}.`;
  }
}

// Exercise 4: The Flight, Train, and Car subclasses

class Flight extends Transport {
  constructor(type, duration, cost, flightNumber) {
    super(type, duration, cost);
    this.flightNumber = flightNumber;
  }
}

class Train extends Transport {
  constructor(type, duration, cost, trainNumber) {
    super(type, duration, cost);
    this.trainNumber = trainNumber;
  }
}

class Car extends Transport {
  constructor(type, duration, cost, carMake, carModel) {
    super(type, duration, cost);
    this.carMake = carMake;
    this.carModel = carModel;
  }
}

// Exercise 5: The Trip class

class Trip {
  constructor() {
    this.origin = null;
    this.destinations = [];
    this.transports = [];
  }

  setOrigin(name, description, dateOfDeparture) {
    this.origin = new Origin(name, description, dateOfDeparture);
  }

  addDestination(name, description, dateOfArrival) {
    const destination = new Destination(name, description, dateOfArrival);
    this.destinations.push(destination);
  }

  addTransport(type, duration, cost, additionalData) {
    let transport;
    switch (type) {
      case "flight":
        transport = new Flight(duration, cost, additionalData);
        break;
      case "train":
        transport = new Train(duration, cost, additionalData);
        break;
      case "car":
        transport = new Car(duration, cost, additionalData);
      default:
        transport = new Transport(type, duration, cost);
    }
    this.transports.push(transport);
  }

  // displayTrip() {
  //   return ``;
  // }
}
//
//
//
// Tests-------------------
//
//
// Create a new trip
console.log("Creating a new trip");
const trip = new Trip();

// Set the trip's origin
console.log("Setting the trip's origin");
trip.setOrigin("New York City", "The Big Apple", "2023-09-01");
console.log(trip.origin.displayLocation());

// Add some destinations
console.log("Adding some destinations");
trip.addDestination("London", "The capital city of England", "2023-09-02");
trip.addDestination("Paris", "The city of love", "2023-09-05");
for (let destination of trip.destinations) {
  console.log(destination.displayLocation());
}

// Add some transports
console.log("Adding some transports");
trip.addTransport("flight", "7 hours", 500, "AB123");
trip.addTransport("train", "2 hours", 100, "XYZ789");
trip.addTransport("car", "1 hour", 50, { make: "Toyota", model: "Corolla" });
for (let transport of trip.transports) {
  console.log(transport.displayTransport());
}

// Change a transport's duration and cost
console.log("Changing a transport's duration and cost");
trip.transports[0].changeDuration("8 hours");
trip.transports[0].changeCost(550);
console.log(trip.transports[0].displayTransport());

// Display the trip's details
console.log("Displaying the trip's details");
// console.log(trip.displayTrip());

// Add an activity to a location
console.log("Adding an activity to a location");
trip.origin.addActivity("Sightseeing at Times Square");
console.log(trip.origin.displayLocation());

// Remove an activity from a location
console.log("Removing an activity from a location");
trip.origin.removeActivity("Sightseeing at Times Square");
console.log(trip.origin.displayLocation());
