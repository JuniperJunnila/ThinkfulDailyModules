import "./styles.css";

/*
Add event listeners to the .expand_button buttons
*/
function expandArticleBody() {
  const expandButtons = document.querySelectorAll(".expand_button");
  for (let button of expandButtons) {
    const gGParent = button.parentElement.parentElement.parentElement;
    const articleBody = gGParent.querySelector(".article_body");
    button.addEventListener("click", (event) => {
      event.preventDefault();
      if (button.innerText === "V") {
        articleBody.style.display = "none";
        button.innerText = ">";
        return;
      }
      articleBody.style.display = "block";
      button.innerText = "V";
    });
  }
}

/*
Add event listeners to the .highlightBtn buttons
*/
function highlightArticle() {
  const highlightButtons = document.querySelectorAll(".highlightBtn");
  for (let button of highlightButtons) {
    let gParent = button.parentElement.parentElement;
    console.log(gParent.innerHTML)
    button.addEventListener("click", (event) => {
      event.preventDefault();
      if (button.innerText === "+") {
        gParent.classList.add("highlight");
        button.innerText = "-";
        return;
      }
      gParent.classList.remove("highlight");
      button.innerText = "+";
    });
  }
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
