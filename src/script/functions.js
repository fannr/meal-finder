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

export { toggleMode, getCategory, filterCategory, showResponseMessage };
