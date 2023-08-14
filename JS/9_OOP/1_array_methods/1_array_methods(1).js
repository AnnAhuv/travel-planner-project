const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: 10001
    },
    hobbies: ["reading", "running", "gaming"],
    friends: [
      {
        id: 2,
        name: "Jane Smith",
        age: 25
      },
      {
        id: 3,
        name: "Bob Johnson",
        age: 35
      }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    address: {
      street: "456 Park Ave",
      city: "Los Angeles",
      state: "CA",
      zip: 90001
    },
    hobbies: ["hiking", "cooking", "traveling"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 4,
        name: "Samantha Brown",
        age: 28
      }
    ]
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    address: {
      street: "789 Elm St",
      city: "Chicago",
      state: "IL",
      zip: 60001
    },
    hobbies: ["fishing", "golfing", "watching TV"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 5,
        name: "Emily Davis",
        age: 32
      }
    ]
  },
  {
    id: 4,
    name: "Samantha Brown",
    age: 28,
    address: {
      street: "987 Oak St",
      city: "Los Angeles",
      state: "CA",
      zip: 90002
    },
    hobbies: ["painting", "yoga", "shopping"],
    friends: [
      {
        id: 2,
        name: "Jane Smith",
        age: 25
      },
      {
        id: 6,
        name: "Michael Johnson",
        age: 31
      }
    ]
  },
  {
    id: 5,
    name: "Emily Davis",
    age: 32,
    address: {
      street: "654 Pine St",
      city: "Chicago",
      state: "IL",
      zip: 60002
    },
    hobbies: ["photography", "gardening", "dancing"],
    friends: [
      {
        id: 3,
        name: "Bob Johnson",
        age: 35
      },
      {
        id: 7,
        name: "David Lee",
        age: 29
      }
    ]
  },
  {
    id: 6,
    name: "Michael Johnson",
    age: 31,
    address: {
      street: "369 Maple St",
      city: "New York",
      state: "NY",
      zip: 10002
    },
    hobbies: ["cooking", "soccer", "coding"],
    friends: [
      {
        id: 4,
        name: "Samantha Brown",
        age: 28
      },
      {
        id: 8,
        name: "Jessica Williams",
        age: 26
      }
    ]
  },
  {
    id: 7,
    name: "David Lee",
    age: 29,
    address: {
      street: "258 Cedar St",
      city: "Chicago",
      state: "IL",
      zip: 60003
    },
    hobbies: ["traveling", "reading", "swimming"],
    friends: [
      {
        id: 5,
        name: "Emily Davis",
        age: 32
      },
      {
        id: 9,
        name: "Kevin Anderson",
        age: 30
      }
    ]
  },
  {
    id: 8,
    name: "Jessica Williams",
    age: 26,
    address: {
      street: "741 Elmwood Ave",
      city: "New York",
      state: "NY",
      zip: 10003
    },
    hobbies: ["yoga", "hiking", "painting"],
    friends: [
      {
        id: 6,
        name: "Michael Johnson",
        age: 31
      },
      {
        id: 10,
        name: "Sarah Wilson",
        age: 27
      }
    ]
  },
  {
    id: 9,
    name: "Kevin Anderson",
    age: 30,
    address: {
      street: "123 Oak St",
      city: "Los Angeles",
      state: "CA",
      zip: 90003
    },
    hobbies: ["surfing", "cooking", "gaming"],
    friends: [
      {
        id: 7,
        name: "David Lee",
        age: 29
      },
      {
        id: 11,
        name: "Christopher Clark",
        age: 33
      }
    ]
  },
  {
    id: 10,
    name: "Sarah Wilson",
    age: 27,
    address: {
      street: "456 Pine St",
      city: "New York",
      state: "NY",
      zip: 10004
    },
    hobbies: ["singing", "gardening", "watching movies"],
    friends: [
      {
        id: 8,
        name: "Jessica Williams",
        age: 26
      },
      {
        id: 12,
        name: "Laura Martinez",
        age: 24
      }
    ]
  },
  {
    id: 11,
    name: "Christopher Clark",
    age: 33,
    address: {
      street: "789 Maple Ave",
      city: "Chicago",
      state: "IL",
      zip: 60004
    },
    hobbies: ["playing guitar", "cooking", "reading"],
    friends: [
      {
        id: 9,
        name: "Kevin Anderson",
        age: 30
      },
      {
        id: 12,
        name: "Laura Martinez",
        age: 24
      }
    ]
  },
  {
    id: 12,
    name: "Laura Martinez",
    age: 24,
    address: {
      street: "852 Elm St",
      city: "New York",
      state: "NY",
      zip: 10005
    },
    hobbies: ["dancing", "cooking", "painting"],
    friends: [
      {
        id: 10,
        name: "Sarah Wilson",
        age: 27
      },
      {
        id: 11,
        name: "Christopher Clark",
        age: 33
      }
    ]
  }
];


// FILTER

// Exercise 1: Use the filter method to get all the friends of John Doe
const johnDoeFriends = data.filter(person => {
  return person.friends.some(friend => friend.id === 1);
});

console.log('filter 1');
console.log(johnDoeFriends);
const [firstFriend] = johnDoeFriends;
console.log(firstFriend);
const { friends: [friend1, friend2] } = firstFriend;
console.log(friend1);
console.log(friend2);

// Exercise 2: Use the filter method to get all the people who live in New York
const peopleInNewYork = data.filter(person => {
  return person.address.city === "New York";
});
console.log('filter 2');
console.log(peopleInNewYork);

// Exercise 3: Use the filter method to get all the people who are older than 30
const peopleOver30 = data.filter(person => {
  return person.age > 30;
});
console.log('filter 3');
console.log(peopleOver30);


// MAP

// Exercise 1: Use the map method to put the names of all the friends of John Doe in an array 
const johnDoeFriendNames = data.find(person => person.name === 'John Doe').friends.map(friend => friend.name);
console.log('map 1');
console.log(johnDoeFriendNames);

// Exercise 2: Use the map method to get the full addresses (street, city, state, and zip) of all the people in the data array
const fullAddresses = data.map(person => {
  return `${person.address.street}, ${person.address.city}, ${person.address.state}, ${person.address.zip}`;
});
console.log('map 2');
console.log(fullAddresses);

// Exercise 3: Use the map method to get the hobbies of all the people in the data array in a single array
const allHobbies = data.map(person => person.hobbies).flat();
console.log('map 3');
console.log(allHobbies);

// The `flat()` method in JavaScript is used to flatten a nested array into a new array with a specified depth or level. By default, it flattens one level deep.

// Example:

// - Flattening an array one level deep (default behavior):

[1, [2, 3], [4, [5, 6]]].flat(); // returns [1, 2, 3, 4, [5, 6]]


// - Flattening an array with multiple depths:
[1, [2, 3], [4, [5, 6]]].flat(2); // returns [1, 2, 3, 4, 5, 6]

// You can also use `Infinity` as the depth argument to completely flatten deeply nested arrays.

// FLATMAP

// The `flatMap()` method in JavaScript is a combination of the `map()` and `flat()` methods. It first maps each element using a mapping function, then flattens the result into a new array. It's essentially equivalent to using `map()` followed by `flat()` with a depth of 1.

// Example:

const arr = [1, 2, 3, 4];

const result = arr.flatMap(x => [x, x * 2]);

console.log(result); // [1, 2, 2, 4, 3, 6, 4, 8]

// In the example, for each element in `arr`, `flatMap` creates a new array `[x, x * 2]`. All these individual arrays are then flattened into a single array, resulting in `[1, 2, 2, 4, 3, 6, 4, 8]`.

// Exercise 1: Use the flatMap method to get the hobbies of all the people in the data array in a single array
const allHobbies1 = data.flatMap(person => person.hobbies);
console.log(allHobbies1);

// Exercise 2: Create a flat list of all friends of each person.
const allFriends = data.flatMap(person => person.friends);
console.log("Exercise 1 Result:", allFriends);

// Exercise 3: Create a list of all unique hobbies across all people in the `data` array.
const allHobbies2 = data.flatMap(person => person.hobbies);
const uniqueHobbies = [...new Set(allHobbies2)];
console.log("Exercise 2 Result:", uniqueHobbies);


// FIND

// Exercise 1: Use the find method to find the first person who lives in Chicago
const firstChicagoan = data.find(person => {
  return person.address.city === "Chicago";
});
console.log('find 1');
console.log(firstChicagoan);

// Exercise 2: Use the find method to find the first person who is older than 30
const firstSenior = data.find(person => {
  return person.age > 30;
});
console.log('find 2');
console.log(firstSenior);

// Exercise 3: Use the find method to find the first person who has "reading" as a hobby
const firstReader = data.find(person => {
  return person.hobbies.includes("reading");
});
console.log('find 3');
console.log(firstReader);


// FOREACH

// Exercise 1: Use the forEach method to print out the names of all the people in the data array
console.log('forEach 1');
data.forEach(person => {
  console.log(person.name);
});


// Exercise 2: Use the forEach method to add a new property "isAdult" to each person object and set it to true if the person is over 18 and false if not
data.forEach(person => {
  person.isAdult = person.age >= 18;
});
console.log('forEach 2');
console.log(data);

// Exercise 3: Use the forEach method to print out the names of all the friends of each person
data.forEach(person => {
  person.friends.forEach(friend => {
    console.log('forEach 3');
    console.log(friend.name);
  });
});


// SOME

// Exercise 1: Use the some method to check if any of the people in the data array have "cooking" as a hobby
const anyCooks = data.some(person => {
  return person.hobbies.includes("cooking");
});
console.log('some 1');
console.log(anyCooks);


// Exercise 2: Use the some method to check if any of the people in the data array live in California
const anyCalifornians = data.some(person => {
  return person.address.state === "CA";
});
console.log('some 2');
console.log(anyCalifornians);


// Exercise 3: Use the some method to check if any of the friends of each person in the data array are older than 30
const anyOldFriends1 = data.some(person => {
  // For each person in the data array...

  return person.friends.some(friend => {
    // ... check if any of their friends...

    return friend.age > 30;
    // ... is older than 30.
  });
});

const anyOldFriends2 = data.some(person => person.friends.some(friend => friend.age > 30));
console.log('some 3');
console.log(anyOldFriends1);
console.log(anyOldFriends2);


// EVERY

// Exercise 1: Use the every method to check if all the people in the data array have "reading" as a hobby
const allReaders = data.every(person => {
  return person.hobbies.includes("reading");
});
console.log('every 1');
console.log(allReaders);


// Exercise 2: Use the every method to check if all the people in the data array live in the same state
const allInSameState = data.every(person => {
  return person.address.state === data[0].address.state;
});
console.log('every 2');
console.log(allInSameState);


// Exercise 3: Use the every method to check if all the friends of each person in the data array are older than 25
const allFriendsOver25 = data.every(person => {
  return person.friends.every(friend => {
    return friend.age > 25;
  });
});
console.log('every 3');
console.log(allFriendsOver25);


// REDUCE

// Exercise 1: Use the reduce method to get the total age of all the people in the data array
const totalAge = data.reduce((acc, person) => {
  return acc + person.age;
}, 0);
console.log('reduce 1');
console.log(totalAge);


// Exercise 2: Use the reduce method to get the number of people who live in each state
const peopleByState1 = data.reduce((accumulator, currentPerson) => {
  // Extract the state of the current person from their address.
  const stateOfCurrentPerson = currentPerson.address.state;

  // Check if this state is already a key in our accumulator.
  if (accumulator[stateOfCurrentPerson]) {
    // If it is, increase the count for this state.
    accumulator[stateOfCurrentPerson] += 1;
  } else {
    // Otherwise, create a new entry for this state and set its count to 1.
    accumulator[stateOfCurrentPerson] = 1;
  }

  // Return the updated accumulator for the next iteration.
  return accumulator;

  // The second argument to reduce initializes the accumulator as an empty object.
}, {});


const peopleByState2 = data.reduce((acc, person) => {
  acc[person.address.state] = (acc[person.address.state] || 0) + 1;
  return acc;
}, {});

console.log('reduce 2');
console.log(peopleByState1); // { NY: 5, CA: 3, IL: 4 }
console.log(peopleByState2); // { NY: 5, CA: 3, IL: 4 }


// Exercise 3: Use the reduce method to get the average age of all the people in the data array
const averageAge = data.reduce((acc, person) => {
  return acc + person.age;
}, 0) / data.length;
console.log('reduce 3');
console.log(averageAge);


// INCLUDES

// Exercise 1: Use the includes method to check if the hobbies of John Doe include "gaming"
const hasGamingHobby = data.find(person => person.id === 1).hobbies.includes("gaming");
console.log('includes 1');
console.log(hasGamingHobby);

// Exercise 2: Use the includes method to check if the friends of Jane Smith include someone with the id of 4
const hasFriendWithId4 = data.find(person => person.name === 'Jane Smith').friends.map(friend => friend.id).includes(4);
console.log('includes 2');
console.log(hasFriendWithId4);


// Exercise 3: Use the includes method to check if the data array includes a person with the name "Emily Davis"
const hasEmily = data.map(person => person.name).includes("Emily Davis");
console.log('includes 3');
console.log(hasEmily);


// Find the most common friend in the data array.

// version 1
function findMostCommonFriend1(data) {

  // Initialize a dictionary to store friend occurrences
  let friendOccurrences = {};

  // Loop through each individual's friends list
  for (let individual of data) {
    for (let friend of individual.friends) {

      // If the friend is already in the dictionary, increase their count
      if (friendOccurrences[friend.id]) {
        friendOccurrences[friend.id]++;
      } else {
        // Otherwise, set their count to 1
        friendOccurrences[friend.id] = 1;
      }

    }
  }

  // Determine which friend appears most frequently
  let mostFrequentFriendID = null;
  let highestFrequency = 0;

  for (let id in friendOccurrences) {
    if (friendOccurrences[id] > highestFrequency) {
      highestFrequency = friendOccurrences[id];
      mostFrequentFriendID = parseInt(id);
    }
  }

  // Return the details of the most common friend
  return data.find(person => person.id === mostFrequentFriendID);
}

// version 2
function findMostCommonFriend2(data) {
  // Object to store counts of how many times each friend appears in the data
  let friendCounts = {};

  // Traverse through each person in the data
  for (let person of data) {
    // Traverse through each friend of the person
    for (let friend of person.friends) {
      // If this friend id is already in the dictionary, increment its count
      // Otherwise, initialize its count to 1
      friendCounts[friend.id] = (friendCounts[friend.id] || 0) + 1;
    }
  }

  // Now, we need to find the friend id with the maximum count
  let mostCommonFriendId = null;
  let maxCount = 0;

  for (let friendId in friendCounts) {
    if (friendCounts[friendId] > maxCount) {
      maxCount = friendCounts[friendId];
      mostCommonFriendId = parseInt(friendId);
    }
  }

  // Finally, return the details of the most common friend
  return data.find(person => person.id === mostCommonFriendId);
}


console.log(findMostCommonFriend1(data));
console.log(findMostCommonFriend2(data));