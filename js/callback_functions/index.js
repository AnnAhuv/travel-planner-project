// Exercise 1:

const processTravelPlans = (travelPlans, callback) => {
  if (!Array.isArray(travelPlans)) {
    throw new Error("Expected an array of travel plans");
  }

  return travelPlans.map((plan) => {
    if (!"city" in plan || !"activities" in plan) {
      throw new Error(
        `Travel plan with ID ${plan.id} is not in the right structure`
      );
    } else {
      return callback(plan);
    }
  });
};

const travelPlans = [
  {
    city: "Paris",
    activities: [
      { name: "Eiffel Tower", duration: 2 },
      { name: "Louvre Museum", duration: 3 },
    ],
  },
  {
    city: "London",
    activities: [
      { name: "British Museum", duration: 1 },
      { name: "London Eye", duration: 2 },
    ],
  },
];

processTravelPlans(travelPlans, (plan) => console.log(plan));

//
//
//
// Exercise 2:

const processActivities = (activities, callback) => {
  if (!Array.isArray(activities)) {
    throw new Error("Expected an array of activities");
  }
  return activities.map((activity) => {
    if (!"name" in activity || !"type" in activity) {
      throw new Error(
        `Activity with ID ${activity.id} is not in the right structure`
      );
    } else {
      return callback(activity);
    }
  });
};
//
//
//
// Exercise 3:

const processPlan = (travelPlan, callback) => {
  if (typeof travelPlan !== "object") {
    throw new Error("Expected a travel plan object");
  }
  if (!"city" in travelPlan || !"activities" in travelPlan) {
    throw new Error(
      `Travel plan with ID ${travelPlan.id} is not in the right structure`
    );
  } else {
    return callback(travelPlan);
  }
};
