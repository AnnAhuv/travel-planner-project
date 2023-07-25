// 1

//Describe
//Est' massiv . Nujno vitashit' znachenie duration i vstavit' v peremennyu totalDurationTime
//nyjno vstavit' massive v peremennyu
//perebrat' massiv nahodya duration
//slojit' vse duration v peremennyu totalDuration

const allInformationArrOfObjects = [
  { name: "Activity 1", duration: 2 },
  { name: "Activity 2", duration: 3 },
  { name: "Activity 3", duration: 1 },
];

/*
const users = [{ name: "Name1" }, { name: "Name2" }];
const result = users.find((user) => user.name === "Name2");
console.log(result); // => { name: 'Name2' }
*/

function duration(activities) {
  let totalDuration = 0;

  for (let i = 0; i < activities.length; i++) {
    totalDuration += activities[i].duration;
  }
  return totalDuration;
}
console.log(duration(allInformationArrOfObjects));
