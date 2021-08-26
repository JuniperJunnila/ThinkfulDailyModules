const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
  axios
    .get("http://localhost:5000/constellations")
    .then((response)=>{
      let allNames = response.data.map((constellation)=>constellation.name)
      console.log(allNames)
      return allNames
    })
}

function getConstellationsByQuadrant(quadrant) {
  axios
    .get("http://localhost:5000/constellations")
    .then((response)=>{
      let constByQuad = response.data.filter((constellation)=>constellation.quadrant === quadrant)
      console.log(constByQuad)
      return constByQuad
    })
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
