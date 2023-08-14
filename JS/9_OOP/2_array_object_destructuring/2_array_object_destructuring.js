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



// ARRAY DESTRUCTURING

// Exercise 1: Use array destructuring to get the first two hobbies of the first person in the data array
var [firstPerson] = data;
const [firstHobby, secondHobby] = firstPerson.hobbies;
console.log(firstHobby);
console.log(secondHobby);


// Exercise 2: Use array destructuring to get the first and third friend of the second person in the data array
const [, secondPerson] = data;
var [firstFriend, , thirdFriend] = secondPerson.friends;
console.log(firstFriend);
console.log(thirdFriend);


// OBJECT DESTRUCTURING

// Exercise 1: Use object destructuring to get the name, age, and city of the third person in the data array
let [, , {name, age, address: {city}}] = data;
console.log(name);
console.log(age);
console.log(city);


// Exercise 2: Use object destructuring to get the name and age of the first friend of the third person in the data array
[, , {friends: [{name, age}]}] = data;
console.log(name);
console.log(age);


// THE REST OPERATOR

//Exercise 1: Put the last two objects from the data array in a new array
const [, ...restOfData] = data;
console.log(restOfData);

/*Explanation:
The rest operator allows us to get all elements of an array except the first one.
In this case, the restOfData variable will contain the values of the last two objects in the data array.
*/


//Exercise 2: Put the last friend of the first person in a new array
var [firstPerson] = data;
const { friends: [, ...restOfFriends] } = firstPerson;
console.log(restOfFriends);

/*Explanation:
The rest operator allows us to get all elements of a nested array except the first few.
In this case, the restOfFriends variable will contain the values of all elements in the friends array from the firstPersonWithFriends3 object except the first two.
*/
