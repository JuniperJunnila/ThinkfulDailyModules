import "./styles.css";

/**
  Write the addheadings() function here
*/

function addHeadings() {
  let articles = document.querySelectorAll('article');
  for (let art of articles.values()) {
    let currentArt = art.innerText;
    currentArt = `<h2>${currentArt}</h2>`;
    art.innerHTML = currentArt;
  }
}

/**
  Write the styleTutorialsAndArticles() function here
*/
function styleTutorialsAndArticles() {
  let articles = document.querySelectorAll('article');
  for (let art of articles.values()) {
    let currentArtText = art.innerText
    let currentArt = art.classList;
    if (currentArtText.includes('Tutorial')){
      currentArt.add('tutorial')
    } else {currentArt.add('article')}
  }
}
/**
  Write the separateAllTutorials() function here
*/
function separateAllTutorials() {
  let tutorials = document.querySelectorAll('.tutorial');
  if (!tutorials.length) return
  const divContainer = document.querySelector('div.container')
  const tutorialSection = document.createElement('section')
  tutorialSection.classList.add('tutorials')
  for (let tut of tutorials.values()) {
    tutorialSection.appendChild(tut)
  }
  divContainer.appendChild(tutorialSection)
}
/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
