 // 1. Update Destination

 function updateDestination(newDestination) {
    this.destination = newDestination;
  }
  
  const travelPlan = {
    destination: "Paris"
  };
  
  const newDestination = "London";
  
  updateDestination.call(travelPlan, newDestination);
  
  console.log(travelPlan.destination); // Output: "London"
  
 
 // 2 Calculate Total Travel

 function calculateTotalCost() {
    return this.flights.reduce((total, flight) => total + flight.cost, 0);
  }
  
  const travelPlan = {
    traveler: 'John',
    destination: 'London',
    flights: [
      { departure: 'NYC', arrival: 'London', cost: 500 },
      { departure: 'London', arrival: 'NYC', cost: 500 }
    ]
  };
  
  const totalCost = calculateTotalCost.call(travelPlan);
  console.log(totalCost); // Output: 1000

  // 3. Bind a Traveler to a Plan Creation Method: 

  function createPlan(destination) {
    this.plans.push({ destination });
  }
  
  const traveler = {
    name: 'John',
    budget: 2000,
    plans: []
  };
  
  const destination = 'London';
  
  const boundCreatePlan = createPlan.bind(traveler);
  
  boundCreatePlan(destination);
  
  console.log(traveler);


  // 4. Display Traveler Plans:

  function displayPlans() {
    return this.plans.map(plan => plan.destination);
  }
  
  const traveler = {
    name: 'John',
    budget: 2000,
    plans: [{ destination: 'London' }, { destination: 'Paris' }]
  };
  
  const plans = displayPlans.call(traveler);
  
  console.log(plans); // Output: ['London', 'Paris']
  

  // 5. Calculate Average Cost of Traveler Plans: 

  function calculateAverageCost() {
    let totalCost = this.plans.reduce((total, plan) => total + plan.cost, 0);
    return totalCost / this.plans.length;
  }
  
  const traveler = {
    name: 'John',
    plans: [
      { destination: 'London', cost: 1000 },
      { destination: 'Paris', cost: 500 }
    ]
  };
  
  const averageCost = calculateAverageCost.call(traveler);
  
  console.log(averageCost); // Output: 750
  

  // 6. Bind a Traveler to a Plan Deletion Method:

  function deletePlan(destination) {
    this.plans = this.plans.filter(plan => plan.destination !== destination);
  }
  
  const traveler = {
    name: 'John',
    plans: ['London', 'Paris']
  };
  
  const boundDeletePlan = deletePlan.bind(traveler);
  
  console.log(boundDeletePlan); // Output: [Function: bound deletePlan]


  // 7. Update Traveler Budget:

  function updateBudget(newBudget) {
    this.budget = newBudget;
  }
  
  const traveler = {
    name: 'John',
    budget: 2000
  };
  
  const newBudget = 3000;
  
  updateBudget.call(traveler, newBudget);
  
  console.log(traveler); // Output: { name: 'John', budget: 3000 }


  // 8. Filter Traveler Plans by Cost:

  function filterPlansByCost(maxCost) {
    return this.plans.filter(plan => plan.cost <= maxCost);
  }
  
  const traveler = {
    name: 'John',
    plans: [
      { destination: 'London', cost: 1000 },
      { destination: 'Paris', cost: 1500 }
    ]
  };
  
  const maxCost = 1200;
  
  const filteredPlans = filterPlansByCost.call(traveler, maxCost);
  
  console.log(filteredPlans);
  
  
  
  