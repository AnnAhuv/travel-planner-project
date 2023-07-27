// ex 1 

function calcTotalDuration(activities) {
    let totalDuration = 0;
  
    for (let i = 0; i < activities.length; i++) {
      totalDuration += activities[i].duration;
    }
  
    return totalDuration;
  }
  
  // Example usage:
  const activities = [
    { name: "Activity 1", duration: 2 },
    { name: "Activity 2", duration: 3 },
    { name: "Activity 3", duration: 1 }
  ];
  
  const totalDuration = calcTotalDuration(activities);
  console.log(totalDuration);

  // ex 2 

  function findLongestActivity(activities) {
    let longestActivity = activities[0];
  
    for (let i = 1; i < activities.length; i++) {
      if (activities[i].duration > longestActivity.duration) {
        longestActivity = activities[i];
      }
    }
  
    return longestActivity.name;
  }
  
  // Example usage:
  const activities = [
    { name: "Activity 1", duration: 2 },
    { name: "Activity 2", duration: 3 },
    { name: "Activity 3", duration: 1 }
  ];
  
  const longestActivityName = findLongestActivity(activities);
  console.log(longestActivityName); // Output: "Activity 2"

  // ex 3 


  function findMostCommonActivity(travelPlans) {
    const activityFrequency = {};
  
    // Iterate over the travel plans and activities to count occurrences
    for (const plan of travelPlans) {
      for (const activity of plan.activities) {
        const activityName = activity.name;
        if (activityFrequency.hasOwnProperty(activityName)) {
          activityFrequency[activityName]++;
        } else {
          activityFrequency[activityName] = 1;
        }
      }
    }
  
    // Find the activity with the highest occurrence
    let mostCommonActivity = null;
    let maxOccurrence = 0;
  
    for (const activityName in activityFrequency) {
      if (activityFrequency[activityName] > maxOccurrence) {
        mostCommonActivity = activityName;
        maxOccurrence = activityFrequency[activityName];
      }
    }
  
    return mostCommonActivity;
  }
  
  // Example usage:
  const travelPlans = [
    {
      name: "Plan 1",
      activities: [{ name: "Activity 1" }, { name: "Activity 2" }],
    },
    {
      name: "Plan 2",
      activities: [{ name: "Activity 1" }, { name: "Activity 3" }],
    },
  ];
  
  const mostCommonActivityName = findMostCommonActivity(travelPlans);
  console.log(mostCommonActivityName); // Output: "Activity 1"

  
  // ex 4 


  function findShortestActivity(travelPlans) {
    let shortestDuration = Infinity;
    let shortestActivity = null;
  
    // Iterate over the travel plans and activities to find the shortest duration
    for (const plan of travelPlans) {
      for (const activity of plan.activities) {
        const activityDuration = activity.duration;
        if (activityDuration < shortestDuration) {
          shortestDuration = activityDuration;
          shortestActivity = activity.name;
        }
      }
    }
  
    return shortestActivity;
  }
  
  // Example usage:
  const travelPlans = [
    {
      name: "Plan 1",
      activities: [
        { name: "Activity 1", duration: 2 },
        { name: "Activity 2", duration: 3 },
      ],
    },
    {
      name: "Plan 2",
      activities: [
        { name: "Activity 3", duration: 1 },
        { name: "Activity 4", duration: 5 },
      ],
    },
  ];
  
  const shortestActivityName = findShortestActivity(travelPlans);
  console.log(shortestActivityName);  

  // ex 5


  function findShortestSegment(segments) {
    let shortestDistance = Infinity;
    let shortestSegment = null;
  
     for (const segment of segments) {
      const segmentDistance = segment.distance;
      if (segmentDistance < shortestDistance) {
        shortestDistance = segmentDistance;
        shortestSegment = { start: segment.start, end: segment.end };
      }
    }
  
    return shortestSegment;
  }
  
  // Example usage:
  const segments = [
    { start: "City A", end: "City B", distance: 100 },
    { start: "City B", end: "City C", distance: 150 },
    { start: "City C", end: "City D", distance: 75 },
  ];
  
  const shortestSegment = findShortestSegment(segments);
  console.log(shortestSegment); // Output: { start: "City C", end: "City D" }

  
  // ex 6


  function countSegmentsByMode(segments) {
    const modeCounts = {};
  
    // Iterate over the segments to count each mode of transportation
    for (const segment of segments) {
      const mode = segment.mode;
      if (mode in modeCounts) {
        modeCounts[mode]++;
      } else {
        modeCounts[mode] = 1;
      }
    }
  
    return modeCounts;
  }
  
  // Example usage:
  const segments = [
    { start: "City A", end: "City B", mode: "Car" },
    { start: "City B", end: "City C", mode: "Train" },
    { start: "City C", end: "City D", mode: "Car" },
    { start: "City D", end: "City E", mode: "Flight" },
  ];
  
  const modeCounts = countSegmentsByMode(segments);
  console.log(modeCounts); // Output: { Car: 2, Train: 1, Flight: 1 }

  

  // ex 7

  function findAverageExpense(expenses) {
    if (expenses.length === 0) {
      return 0;
    }
  
    let totalExpense = 0;
  
    // Calculate the sum of all expenses
    for (const expense of expenses) {
      totalExpense += expense;
    }
  
    // Calculate the average expense
    const averageExpense = totalExpense / expenses.length;
  
    return averageExpense;
  }
  
  // Example usage:
  const expenses = [50, 100, 75, 125, 200];
  const averageExpense = findAverageExpense(expenses);
  console.log(averageExpense); // Output: 110

  
  // ex 8


  function findHighestExpense(expenses) {
    if (expenses.length === 0) {
      return 0; // Return 0 if the array is empty
    }
  
    let highestExpense = expenses[0]; // Assume the first expense as the highest
  
    // Iterate over the expenses to find the highest
    for (let i = 1; i < expenses.length; i++) {
      if (expenses[i] > highestExpense) {
        highestExpense = expenses[i];
      }
    }
  
    return highestExpense;
  }
  
  // Example usage:
  const expenses = [50, 100, 75, 125, 200];
  const highestExpense = findHighestExpense(expenses);
  console.log(highestExpense); // Output: 200

  

  // ex 9
  