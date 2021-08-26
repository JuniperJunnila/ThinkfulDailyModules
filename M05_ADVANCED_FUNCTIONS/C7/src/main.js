/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
  return parks.filter((park)=>park.location.state === state)
}

function getWishlistParksForUser(parks, users, user) {
  return parks.filter((park)=>users[user].wishlist.includes(park.id))
}

function userHasVisitedAllParksInState(parks, users, state, user) {
  let parksInState = getParksByState(parks, state)
  let visited = users[user].visited
  return parksInState.every((park)=>visited.includes(park.id))
}

function userHasVisitedParkOnWishlist(users, user1, user2) {
  user1 = users[user1]
  user2 = users[user2]
  return user1.visited.some((user) => user2.wishlist.includes(user))
}

function getUsersForUserWishlist(users, userName) {
  const givenWishlist = users[userName].wishlist
  const acc = []
  for (let user in users){
    if (userHasVisitedParkOnWishlist(users, user, userName)){
      acc.push(user)
    }
  }
  return acc
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
