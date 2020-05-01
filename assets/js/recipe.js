

var displayRecipe = function(recipeData) {

    // ****** Recipe Variables ******
    var title = recipeData.hits[0].recipe.label;
    var image = recipeData.hits[0].recipe.image;
    var ingredients =  recipeData.hits[0].recipe.ingredientLines[0];
    var servingSize = recipeData.hits[0].recipe.yield;
    var instructions = recipeData.hits[0].recipe.url;
    var time = recipeData.hits[0].recipe.totalTime;
    var calories = recipeData.hits[0].recipe.calories;

    //  ****** Display Title ******
    if (title) {
        console.log(title);
        var titleEl = document.createElement("h2");
        titleEl.id = "recipe-title";
        titleEl.value = title;
        titleEl.innerHTML = title;
        document.getElementById("recipe-container").appendChild(titleEl);
    }

}

// ****** Fetch Recipe Api ******
window.onload = function () {
    var url = localStorage.getItem('apiUrl')
    console.log(url);

    fetch(url).then(function(response) {
        response.json().then(function(recipeData) {
            displayRecipe(recipeData);
        });
    });    

};