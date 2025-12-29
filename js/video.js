// Fetch, Load and show the categories on html--

// create loadCategories

const loadCategories = () => {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
    
}

// create displayCategories
const displayCategories = (data) => {
    console.log(data);
}

loadCategories();
// displayCategories();