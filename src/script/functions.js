const toggleMode = (el, text) => {
  el.classList.toggle("bi-moon-stars-fill");
  el.classList.toggle("bi-brightness-high-fill");

  text.textContent == "Dark"
    ? (text.textContent = "Light")
    : (text.textContent = "Dark");
};

const showResponseMessage = (err = "Check your internet connection") => {
  return alert(err);
};

const getCategory = async (category) => {
  try {
    if (category) {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );

      const responseJSON = await response.json();
      return responseJSON.meals;
    } else {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );

      const responseJSON = await response.json();
      return responseJSON.categories;
    }
  } catch (err) {
    showResponseMessage(err);
  }
};

const filterCategory = (value, data) => {
  return data.filter((c) => {
    return c.strCategory.toLowerCase().includes(value);
  });
};

const modalElements = (meals) => {
  const modalComponent = document.querySelector(".modal");

  const {
    strMeal,
    strMealThumb,
    strYoutube,
    strCategory,
    strArea,
    strInstructions,
    strTags,
  } = meals;

  modalComponent.querySelector(
    ".modal-title"
  ).textContent = `Details (${strMeal})`;
  modalComponent.querySelector(".images").setAttribute("alt", `${strMeal}`);
  modalComponent
    .querySelector(".images")
    .setAttribute("src", `${strMealThumb}`);
  modalComponent.querySelector(".linkY").setAttribute("href", `${strYoutube}`);
  modalComponent.querySelector(".nameMeal").textContent = `${strMeal}`;
  modalComponent.querySelector(".nameCategory").textContent = `${strCategory}`;
  modalComponent.querySelector(".nameArea").textContent = `${strArea}`;
  modalComponent.querySelector(
    ".intructions"
  ).textContent = `${strInstructions}`;

  const tags = strTags ? strTags.split(",") : "";
  if (tags != "") {
    modalComponent.querySelector(".tags").innerHTML = tags.map(
      (s) => `<span class="badge text-bg-dark p-2">${s}</span>`
    );
  }
};

const animationCard = () => {
  const card = document.querySelectorAll(".card-content");

  for (const c of card.entries()) {
    setTimeout(() => {
      c[1].classList.add("active");
    }, c[0] * 400);
  }
};

export {
  toggleMode,
  getCategory,
  filterCategory,
  showResponseMessage,
  modalElements,
  animationCard,
};
