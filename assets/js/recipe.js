var recipeTitleEl = document.querySelector('#recipe-title');
var url = localStorage.getItem('apiUrl')
var recipeContainer = document.querySelector('#recipe-container');

window.onload = function () {
    this.console.log(url);
    this.getTitle();
    this.getRecipe();
};

var getTitle = function(searchItem) {
    var split = url.split('=');
    var splitUrl = split[1].split('&')
    var searchItem = splitUrl[0]
    recipeTitleEl.textContent = searchItem;
};

// Function to handle search terms
var searchHandler = function() {
    event.preventDefault();

    // set searchItem to input value
    var searchItem = searchEl.value.trim();

    // if searchItem is true run getRecipe function with values from the search input field and set the input field back to blank
    if(searchItem) {
        url = 'https://api.edamam.com/search?q=' + searchItem + '&app_id=42dd91c3&app_key=caa35ee6d60671cba69188f9d36208c3&from=0&to=3&calories=591-722&health=alcohol-free'
        getRecipe(url);
        searchEl.value = ""
    }
};

// --------------------------------------

// fetches API info
var getRecipe = function() {
    var apiUrl= url;
	fetch(apiUrl).then(function(response) {
        response.json().then(function(recipeData) {
            displayRecipe(recipeData)
        });
    });    
}

var displayRecipe = function(recipeData) {

    // ****** Recipe Variables ******
    var allRecipies = recipeData.hits;


    for (var i = 0; i < allRecipies.length; i++) {
        

        //  ****** Recipe 1 ******
        if (allRecipies[0]) {

            //  ****** Recipie Container ******
            var RContainer = document.createElement('div');
            RContainer.classList = "column is-3 box";
            RContainer.setAttribute('id', "container-one")
            recipeContainer.appendChild(RContainer);

            //  ****** Display Title ******   
            var title = recipeData.hits[0].recipe.label;   
            var titleEl = document.createElement("h2");
            // titleEl.id = "recipe-title";
            titleEl.textContent = title;
            RContainer.appendChild(titleEl);
            titleEl.classList = "subtitle";

            //  ****** Display image ******
            var image = recipeData.hits[0].recipe.image;
            var imageEl = document.createElement("img");
            var imageURL = document.createElement("a")
            imageURL.setAttribute('href', recipeData.hits[0].recipe.url)
            imageEl.classList = "image";
            imageURL.appendChild(imageEl);
            imageEl.setAttribute('src', image);
            RContainer.appendChild(imageURL);

            //  ****** Display ingredients ******
            var ingredients =  recipeData.hits[0].recipe.ingredients;  
            var ingredientsHeadEl = document.createElement("h4");

            // ingredientsHeadEl.id = "ingredient-head";
            ingredientsHeadEl.textContent = "Ingredients: ";
            RContainer.appendChild(ingredientsHeadEl);        

            // loop for ingredient list
            var ingredientUl = document.createElement("ul");
            
            document.getElementById("recipe-container").appendChild(ingredientUl);
            for (var i = 0; i < ingredients.length; i++) {
                var ingredientLi = document.createElement("li");
                ingredientLi.textContent = ingredients[i].text;
                RContainer.appendChild(ingredientLi);
                };
        }
    
        //  ****** Recipe 2 ******
        if (allRecipies[1]) {

            //  ****** Recipe Container ******
            var RContainer = document.createElement('div');
            RContainer.classList = "column is-3 box";
            RContainer.setAttribute('id', "container-two")
            recipeContainer.appendChild(RContainer);

            //  ****** Display Title ******   
            var title = recipeData.hits[1].recipe.label;   
            var titleEl = document.createElement("h2");
            titleEl.classList = "subtitle";
            titleEl.textContent = title;
            RContainer.appendChild(titleEl);

            //  ****** Display image ******
            var image = recipeData.hits[1].recipe.image;
            var imageEl = document.createElement("img");
            var imageURL = document.createElement("a")
            imageURL.setAttribute('href', recipeData.hits[1].recipe.url)
            imageEl.classList = "image";
            imageURL.appendChild(imageEl);
            imageEl.setAttribute('src', image);
            RContainer.appendChild(imageURL);

            //  ****** Display ingredients ******
            var ingredients =  recipeData.hits[1].recipe.ingredients;  
            var ingredientsHeadEl = document.createElement("h4");
            ingredientsHeadEl.textContent = "Ingredients: ";
            RContainer.appendChild(ingredientsHeadEl);      

            // loop for ingredient list
            var ingredientUl = document.createElement("ul");
            document.getElementById("recipe-container").appendChild(ingredientUl);
            for (var i = 0; i < ingredients.length; i++) {
                var ingredientLi = document.createElement("li");
                ingredientLi.textContent = ingredients[i].text;
                RContainer.appendChild(ingredientLi);
            };
        }

        //  ****** Recipe 3 ******
        if (allRecipies[2]) {

            //  ****** Recipe Container ******
            var RContainer = document.createElement('div');
            RContainer.classList = "column is-3 box";
            RContainer.setAttribute('id', "container-three")
            recipeContainer.appendChild(RContainer);
            //  ****** Display Title ******   

            var title = recipeData.hits[2].recipe.label;   
            var titleEl = document.createElement("h2");
            titleEl.classList = "subtitle";
            titleEl.textContent = title;
            RContainer.appendChild(titleEl);

            //  ****** Display image ******
            var image = recipeData.hits[2].recipe.image;
            var imageEl = document.createElement("img");
            var imageURL = document.createElement("a")
            imageURL.setAttribute('href', recipeData.hits[2].recipe.url)
            imageEl.classList = "image";
            imageURL.appendChild(imageEl);
            imageEl.setAttribute('src', image);
            RContainer.appendChild(imageURL);

            //  ****** Display ingredients ******
            var ingredients =  recipeData.hits[2].recipe.ingredients;  
            var ingredientsHeadEl = document.createElement("h4");
            ingredientsHeadEl.textContent = "Ingredients: ";
            RContainer.appendChild(ingredientsHeadEl);      

            // loop for ingredient list
            var ingredientUl = document.createElement("ul");

            document.getElementById("recipe-container").appendChild(ingredientUl);
            for (var i = 0; i < ingredients.length; i++) {
            var ingredientLi = document.createElement("li");
            ingredientLi.textContent = ingredients[i].text;
                RContainer.appendChild(ingredientLi);
            };
        }
    }
};
