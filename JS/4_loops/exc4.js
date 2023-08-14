function findShortestActivity(travelPlans) {
  let shortestDuration = Infinity;
  let shortestActivity = '';

  for (let plan of travelPlans) {
    for (let activity of plan.activities) {
      if (activity.duration < shortestDuration) {
        shortestDuration = activity.duration;
        shortestActivity = activity.name;
      }
    }
  }

  return shortestActivity;
}