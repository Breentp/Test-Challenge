// Imports small array of users
// Pretend it's an API request
const users = require("./data").default;

// Fetches all users
const getUsers = () => {
  return users;
};

// Filters users by specific ID
const getUser = async (id) => {
  return Promise((resolve, reject) => {
    const user = users.find((user) => user.id === id)
  if (user) {
      resolve(console.log(user));
    } else {
      reject(console.error("Id is invalid."));
    }
  });
};

// test
// console.log(getUser(3));

module.exports = { getUsers, getUser };

