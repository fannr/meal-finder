import {
  toggleMode,
  getCategory,
  filterCategory,
  showResponseMessage,
  modalElements,
  animationCard,
} from "./functions";
import "./Components/Footer";

const main = () => {
  const navbarMode = document.querySelector(".navbar__mode");
  navbarMode.addEventListener("click", (e) => {
    e.preventDefault();

    const elementIcon = navbarMode.querySelector("i");
    const spanText = navbarMode.querySelector("span");

    if (elementIcon.classList.contains("bi-brightness-high-fill")) {
      toggleMode(elementIcon, spanText);
    } else {
      toggleMode(elementIcon, spanText);
    }

    document.body.classList.toggle("theme__mode");
  });

  const dataList = document.querySelector(".datalist");
  const searchInput = document.querySelector("#inputSearch");
  searchInput.addEventListener("keyup", async () => {
    const valueSearch = searchInput.value.toLowerCase();
    const allCategory = await getCategory();
    const categories = filterCategory(valueSearch, allCategory);

    valueSearch.length == 0
      ? (dataList.style.display = "none")
      : (dataList.style.display = "block");

    if (categories.length > 0) {
      dataList.innerHTML = categories
        .map((c) => `<p class="list-food">${c.strCategory}</p>`)
        .join("");
    } else {
      dataList.innerHTML = `<p>Category ${valueSearch} not found.</p>`;
    }
  });

  const rows = document.querySelector(".cards .row");
  const text = document.querySelector(".text");
  const footer = document.querySelector("footer");
  document.addEventListener("click", async (e) => {
    if (e.target.className == "list-food") {
      const categoryFood = e.target.textContent;
      const categoryListFood = await getCategory(categoryFood);

      searchInput.value = "";
      dataList.style.display = "none";
      footer.style.display = "block";

      text.innerHTML = `<h1 class="text-center mb-5">Category Food: ${categoryFood}</h1>`;

      rows.innerHTML = categoryListFood
        .map(
          (c, index) => `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-4 card-content">
      <div class="card">
        <div class="card-image">
          <img
            src="${c.strMealThumb}"
            class="card-img-top"
            alt="My Images"
            />
          <p>#${++index}</p>
          <h5 class="card-title">${c.strMeal}</h5>
          <button class="btn btn-primary mt-3" id="details" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${
            c.idMeal
          }">Details</button>
        </div>
      </div>
    </div>`
        )
        .join("");

      animationCard();
    } else if (e.target.id == "details") {
      const idMeal = e.target.dataset.id;

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        const responseJSON = await response.json();
        const meals = responseJSON.meals[0];
        modalElements(meals);
      } catch (err) {
        showResponseMessage(err);
      }
    }
  });
};

export default main;
