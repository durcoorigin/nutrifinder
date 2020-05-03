// selects the search bar input
var searchEl = document.querySelector("#search-bar");
// selects the search button
var searchButtonEl = document.querySelector("#search-button");

// fetches API info
var getRecipe = function(searchItem) {
    // **!NOTICE!**
    // The APP ID and APP KEY in the URL is Nick's (Changed from final)
    var apiUrl= 'https://api.edamam.com/search?q=' + searchItem + '&app_id=42dd91c3&app_key=caa35ee6d60671cba69188f9d36208c3&from=0&to=3&calories=591-722&health=alcohol-free';
    localStorage.setItem('apiUrl', apiUrl)
    window.location="recipe.html"
};

// Function to handle search terms
var searchHandler = function() {
    event.preventDefault();
    // set searchItem to input value
    var searchItem = searchEl.value.trim();
    // if searchItem is true run getRecipe function with values from the search input field and set the input field back to blank
    if(searchItem) {
        getRecipe(searchItem);
        searchEl.value = ""
    }
};

// when user clicks the search button it runs the search handler function
searchButtonEl.addEventListener("click", searchHandler);
