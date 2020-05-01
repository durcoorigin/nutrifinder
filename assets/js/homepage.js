// selects the search bar input
var searchEl = document.querySelector("#search-bar");
// selects the search button
var searchButtonEl = document.querySelector("#search-button");

// fetches API info
var getRecipe = function(searchItem) {
    var apiUrl= 'https://api.edamam.com/search?q=' + searchItem + '&app_id=42dd91c3&app_key=caa35ee6d60671cba69188f9d36208c3&from=0&to=1';
    localStorage.setItem(apiUrl);

	fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
	
            console.log(data);
        });
    });    
}

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
