// This array will be provided.
let usersArray = [
  { email: "test1@test.com", password: "test" },
  { email: "test2@test.com", password: "test2" },
  { email: "test3@test.com", password: "test3" },
];

function findOne(email) {
  let foundUser = usersArray.find(user => user.email === email)
  if (foundUser) {
    return foundUser
  } else {
    return {}
    };
  };
  

console.log(findOne("test3@test.com"));



// ! Example: findOne("test1@test.com") // Expected Output: {email: "test1@test.com", password: "test"}

// ! Example: findOne("test5@test.com") // Expected Output: {}