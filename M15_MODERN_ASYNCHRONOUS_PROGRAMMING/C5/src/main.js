const { welcome, goodbye, tell } = require("../utils/fortune-teller");

async function getFortune(question) {
  try {
    const answer = await tell(question)
    console.log(`Your question was: ${question}`);
    console.log(`Your fortune is: ${answer}`);
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
}

async function fullSession(question) {
  try {
    console.log(await welcome())
    await getFortune(question)
    console.log(await goodbye())
  } catch (error) {
    console.log(`There was an error: ${error}`)
  }
}

module.exports = { getFortune, fullSession };
