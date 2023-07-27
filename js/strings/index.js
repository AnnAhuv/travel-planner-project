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