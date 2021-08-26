const {
  generateMessage,
  goodbye,
  generateSlogan,
} = require("../utils/slogan-generator");

async function getSlogan(request) {
  try {
    const response = await generateSlogan(request);
    console.log(`Your request was: ${request}`);
    console.log(`Your slogan is: ${response.slogan}`);
  } catch (err) {
    console.error(err);
  }
}

async function fullSession(request) {
  try {
    const response = await generateMessage()
    console.log (response)
    await getSlogan(request)
    const bye = await goodbye()
    console.log(bye)
  } catch (err) {
    console.error(err);
  }
}

module.exports = { getSlogan, fullSession };
