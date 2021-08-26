const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";
const url = `${BASE_URL}/constellations`

function index() {
  axios
    .get(url)
    .then((response)=>{console.log(response.data)})
}

function create(body) {
  axios
    .post(url, body)
    .then((response)=>console.log(response.data))
}

function show(id) {
  axios
    .get(`${url}/${id}`)
    .then((response)=>console.log(response.data))
}

function update(id, body) {
  axios
    .put(`${url}/${id}`, body)
    .then((response)=>console.log(response.data))
}

function destroy(id) {
  axios
    .delete(`${url}/${id}`)
    .then((response)=>console.log(response.data))
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
