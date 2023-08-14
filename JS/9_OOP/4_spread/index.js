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

/*
  EXERCISE 1:
  Create a new array with each user having an additional property "isAdult" which is true if the age is >= 30.
*/


/*
  EXERCISE 2:
  Given an ID, find the user with that ID and add a new property "isAwesome" set to true.
*/


/*
  EXERCISE 3:
  Create a new array where the address of each user does not have a zip property.
*/

/*
  EXERCISE 4:
  Create a new array where each user's first hobby is capitalized.
*/

/*
  EXERCISE 5:
  Combine all users into a single object with their ID as the key and the rest of their info as the value.
*/


/*
  EXERCISE 6:
  Return a new array with each user's friends' detailed data replaced by only their IDs.
*/
