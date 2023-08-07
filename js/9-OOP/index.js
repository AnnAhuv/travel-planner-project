// Exercise 1: The Location superclass

class Location {
  constructor(name, description, activities = []) {
    this.name = name;
    this.description = description;
    this.activities = [];
  }

  addActivity(activity) {
    return this.activities.push(activity);
  }

  removeActivity(activity) {
    let activityIndex = this.activities.indexOf(activity);
    if (activityIndex > -1) {
      return this.activities.splice(activityIndex, 1);
    } else {
      return `${activity} is not in the list.`;
    }
  }

  displayLocation() {
    return `${this.name} - ${this.description}. Activities: ${this.activities}.`;
  }
}

// Exercise 2: The Origin and Destination subclasses

class Origin extends Location {
  constructor(name, description, dateOfDeparture) {
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
    return (this.duration = newDuration);
  }

  changeCost(newCost) {
    return (this.cost = newCost);
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
  constructor(origin, destinations, transports) {
    this.origin = null;
    this.destinations = [];
    this.transports = [];
  }

  setOrigin(name, description, dateOfDeparture) {
    return (this.origin = new Origin(name, description, dateOfDeparture));
  }

  addDestination() {
    this.destinations.push(new Destination());
  }

  addTransport(type, duration, cost, additionalData) {
    switch (type) {
      case "flight":
        this.transports.push(
          new Flight(duration, cost, additionalData)
        );
        break;
      case "train":
        this.transports.push(
          new Train(duration, cost, additionalData)
        );
        break;
      case "car":
        this.transports.push(
          new Car(duration, cost, additionalData)
        );
    }
  }

  displayTrip() {
    return ``;
  }
}
