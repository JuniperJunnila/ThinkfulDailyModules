const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000/constellations";

function bulkDelete(ids) {
  const allPromises = ids.map((id)=>{
    const url = `${BASE_URL}/${id}`
    axios.delete(url)
    return {id:id}
  })
  return Promise.all(allPromises)
}

module.exports = {
  bulkDelete,
};
