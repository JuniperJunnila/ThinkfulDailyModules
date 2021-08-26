const { welcome, goodbye, tell } = require("../utils/fortune-teller");

/*
welcome().then((welcomeResponse) => {
  console.log(response);
  // "Provide me a question and I'll give you an answer..."
});

goodbye().then((response) => {
  console.log(response);
  // "Best of luck in the future..."
});

tell("Will the weather be warm today?").then((response) => {
  console.log(response);
  // "Outlook good."
});
tell().catch((response) => {
  console.error(response);
  // "A question is required..."
});
*/

function getFortune(question) {
  return tell(question)
    .then((response) => {
      let responseArr = [];
      responseArr.push(`Your question was: ${question}`);
      responseArr.push(`Your fortune is: ${response}`);
      return responseArr;
    })
    .catch((error) => `There was an error: ${error}`);
}

function fullSession(question) {
  return welcome().then((welcomeResponse) => {
    let welcomeMessage = [welcomeResponse];
    return getFortune(question)
      .then((fortuneMessage) => {
        let welcomeFortuneMessage = [];
        if (typeof fortuneMessage === "string") {
          welcomeMessage.push(fortuneMessage);
          console.log(welcomeMessage);
          return welcomeMessage;
        } else {
          return (welcomeFortuneMessage =
            welcomeMessage.concat(fortuneMessage));
        }
      })
      .then((welcomeFortuneMessage) => {
        return goodbye().then((byeWelcomeResponse) => {
          return welcomeFortuneMessage.concat([byeWelcomeResponse]);
        });
      });
  });
}

module.exports = { getFortune, fullSession };
