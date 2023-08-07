// Exercise 1: The Location superclass

class Location {
  constructor(name, description, activities = []) {
    this.name = name;
    this.description = description;
    this.activities = []; // CR - should be: this.activities = activities; 
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
    return `${this.name} - ${this.description}. Activities: ${this.activities}.`; // CR it will not print the activities because it's an array. You should turn this to a string, like this: Activities: ${this.activities.join(', ')}
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
  /*
    CR - shuold be:
    constructor() {
      this.origin = null;
      this.destinations = [];
      this.transports = [];
    }
    because the properties are internal and are populated by the class methods.
  */
  constructor(origin, destinations, transports) {
    this.origin = null;
    this.destinations = [];
    this.transports = [];
  }

  /*
    CR - wrong. should be:
      setOrigin(name, description, dateOfDeparture) {
        this.origin = new Origin(name, description, dateOfDeparture);
      }
  */
  setOrigin(name, description, dateOfDeparture) {
    return (this.origin = new Origin());
  }

  /*
    CR - wrong:
       addDestination(name, description, dateOfArrival) {
        const destination = new Destination(name, description, dateOfArrival);
        this.destinations.push(destination);
      }
  */
  addDestination() {
    return (this.destinations = this.destinations.push(new Destination()));
  }

  addTransport(type, duration, cost, additionalData) {
    /*
      CR - wrong. This is the right implementation:
        let transport;
        switch (type) {
          case 'flight':
            transport = new Flight(type, duration, cost, additionalData);
            break;
          case 'train':
            transport = new Train(type, duration, cost, additionalData);
            break;
          case 'car':
            transport = new Car(type, duration, cost, additionalData.make, additionalData.model);
            break;
          default:
            transport = new Transport(type, duration, cost);
        }
        this.transports.push(transport);
      
    */
    switch (type) {
      case "flight":
        return (this.transports = this.transports.push(
          new Flight(duration, cost, additionalData)
        ));
      case "train":
        return (this.transports = this.transports.push(
          new Train(duration, cost, additionalData)
        ));
      case "car":
        return (this.transports = this.transports.push(
          new Car(duration, cost, additionalData)
        ));
    }
    
  }

  displayTrip() {
    return ``;
  }
}
