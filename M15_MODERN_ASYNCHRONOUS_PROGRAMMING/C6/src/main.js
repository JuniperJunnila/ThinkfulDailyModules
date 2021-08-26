const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

async function update(constellation) {
  try {
    if (!isValid(constellation)) throw "Contellations is invalid";
    const url = `${BASE_URL}/constellations/${constellation.id}`;
    return await axios.put(url, constellation);
  } catch (error) {
    return {
      error: `Updating constellation (id: ${constellation.id}) failed.`,
    };
  }
}

async function bulkImport(constellations) {
  try {
    if (!Array.isArray(constellations))
      throw "Inputted argument must be an array.";
    if (constellations.filter((constellation) => !isValid(constellation))) {
      throw "All constellations must include relevant fields.";
    }
    const finished = constellations.map((constellation) => {
      const url = `${BASE_URL}/constellations/${constellation.id}`;
      return axios.put(url, constellation);
    });
    return Promise.allSettled(finished)
  } catch (err) {
    return { error: err };
  }
}

module.exports = { bulkImport, update };
