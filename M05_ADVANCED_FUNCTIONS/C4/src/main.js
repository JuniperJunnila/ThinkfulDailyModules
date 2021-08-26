/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/
const parks = [
  {
    name: "Canyonlands",
    areaInSquareKm: 1366.2,
    location: { state: "Utah" },
  },
  {
    name: "Crater Lake",
    areaInSquareKm: 741.5,
    location: { state: "Oregon" },
  },
  {
    name: "Zion",
    areaInSquareKm: 595.9,
    location: { state: "Utah" },
  },
];

const findParkByName = (parks, name) => parks.find((park) => park.name === name)

const allParksAboveCertainSize = (parks, minSize) => parks.every((park) => park.areaInSquareKm >= minSize)

const getBigParkNames = (parks, minSize) => {
  let parkList = parks.filter((park) => park.areaInSquareKm >= minSize)
  return parkList.map((park) => park.name)
}

const doesStateHaveOneBigPark = (parks, minSize, state) => {
  let filteredParks = parks.filter((park) => park.location.state === state)
  return filteredParks.some((park) => park.areaInSquareKm >= minSize)
}

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};
