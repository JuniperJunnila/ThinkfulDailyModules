import "./index.css";

const validateSearch = (formData) => {
  const validateExists = (value) => value && value.trim();
  if (!validateExists(formData.get("searchTerm")))
    return "Please enter a search term";
};

const submitHandler = (event) => {
  event.preventDefault();
  const searchData = new FormData(event.target);
  const searchTerm = searchData.get("searchTerm");
  if (validateSearch(searchData)) {
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.setAttribute("id", "searchError");
    errorDiv.innerText = validateSearch(searchData);
    searchForm.appendChild(errorDiv);
  }
  const titles = document.querySelectorAll("h2");
  let lowerTitles = Array.from(titles).map((title) =>
    title.innerText.toLowerCase()
  );
  const hiddenList = document.querySelectorAll('.hidden')
  if (hiddenList.length){
    for (let hidden of hiddenList){
        hidden.classList.remove('hidden')
    }
  }
  lowerTitles.map((title) => {
    if (!title.includes(searchTerm.toLowerCase())) {
      const index = lowerTitles.indexOf(title);
      titles[index].parentElement.classList.add("hidden");
    }
  });
};

function main() {
  const searchForm = document.querySelector("#searchForm");
  searchForm.addEventListener("submit", submitHandler);
}

window.addEventListener("DOMContentLoaded", main);
