let users = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 16,
    sex: "Male",
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    age: 30,
    sex: "Female",
  },
  {
    firstname: "Michael",
    lastname: "Johnson",
    age: 22,
    sex: "Male",
  },
  {
    firstname: "Emily",
    lastname: "Williams",
    age: 28,
    sex: "Female",
  },
  {
    firstname: "David",
    lastname: "Brown",
    age: 15,
    sex: "Male",
  },
  {
    firstname: "Olivia",
    lastname: "Taylor",
    age: 29,
    sex: "Female",
  },
  {
    firstname: "Daniel",
    lastname: "Martinez",
    age: 72,
    sex: "Male",
  },
  {
    firstname: "Sophia",
    lastname: "Anderson",
    age: 12,
    sex: "Female",
  },
  {
    firstname: "Matthew",
    lastname: "Garcia",
    age: 26,
    sex: "Male",
  },
  {
    firstname: "Isabella",
    lastname: "Rodriguez",
    age: 68,
    sex: "Female",
  },
  
];


// Create a filter that will return all the females.

/* 
* Name the array we are trying to filter
* inside the parens, we need a fx. Fx will return something 'true'.
* singular version of array as param for fx
* usually when we filter, we access an object and can use dot notation
*/

let femaleUsers = users.filter(user => user.sex === "Female");

console.log(femaleUsers);

// ? How many female users do we have?
console.log(femaleUsers.length);

// ? How many users do we have that are over the age of 21?

let over21Users = users.filter(user => user.age > 21);
console.log(over21Users.length);

// ! How to remove something from an array using a filter

users = users.filter(user => user.firstname !== "John" && user.lastname !== "Doe");
console.log(users)

// -----------------------------------------

const movies = [
    {
      title: "The Conjuring",
      year: 2013,
      category: "horror",
    },
    {
      title: "Jurassic Park",
      year: 1993,
      category: "adventure",
    },
    {
      title: "Toy Story",
      year: 1995,
      category: "family",
    },
    {
      title: "A Quiet Place",
      year: 2018,
      category: "horror",
    },
    {
      title: "Indiana Jones and the Raiders of the Lost Ark",
      year: 1981,
      category: "adventure",
    },
    {
      title: "Finding Nemo",
      year: 2003,
      category: "family",
    },
    {
      title: "Get Out",
      year: 2017,
      category: "horror",
    },
    {
      title: "Avatar",
      year: 2009,
      category: "adventure",
    },
    {
      title: "Frozen",
      year: 2013,
      category: "family",
    },
    {
      title: "The Shining",
      year: 1980,
      category: "horror",
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
      category: "adventure",
    },
    {
      title: "The Lion King",
      year: 1994,
      category: "family",
    },
    {
      title: "Hereditary",
      year: 2018,
      category: "horror",
    },
    {
      title: "Indiana Jones and the Last Crusade",
      year: 1989,
      category: "adventure",
    },
    {
      title: "Despicable Me",
      year: 2010,
      category: "family",
    },
    {
      title: "The Exorcist",
      year: 1973,
      category: "horror",
    },
    {
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      year: 2003,
      category: "adventure",
    },
    {
      title: "The Incredibles",
      year: 2004,
      category: "family",
    },
    {
      title: "It",
      year: 2017,
      category: "horror",
    },
    {
      title: "Indiana Jones and the Temple of Doom",
      year: 1984,
      category: "adventure",
    },
  ];
  

  /* 
  * create a var called 'adventure' to store all adventure films.
  * create a var called "horror" ^^
  * var for family ^^
  
  * how many movies in library? 
  * give count for each category
  * 
  */


  //adventure
  let adventure = movies.filter((movie) => movie.category === "adventure");
  //horror
  let horror = movies.filter((movie) => movie.category === "horror");
  // family
  let family = movies.filter((movie) => movie.category === "family");
  

  console.log("movies in library: " + movies.length);
  console.log("adventure: " + adventure.length);
  console.log("horror: " + horror.length);
  console.log("family: " + family.length);


