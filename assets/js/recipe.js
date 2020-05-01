

var displayRecipe = function(recipeData) {

    // ****** Recipe Variables ******
    var title = recipeData.hits[0].recipe.label;
    var image = recipeData.hits[0].recipe.image;
    var ingredients =  recipeData.hits[0].recipe.ingredientLines[i];
    var servingSize = recipeData.hits[0].recipe.yield;
    var instructions = recipeData.hits[0].recipe.url;
    var time = recipeData.hits[0].recipe.totalTime;
    var calories = recipeData.hits[0].recipe.calories;

    //  ****** Display Title ******
    if (title) {        
        var titleEl = document.createElement("h2");
        titleEl.id = "recipe-title";
        titleEl.innerHTML = title;
        document.getElementById("recipe-container").appendChild(titleEl);
    }

    //  ****** Display image ******
    if (image) {
        console.log(title);
        var imageEl = document.createElement("img");
        image.id = "recipe-image";
        imageEl.setAttribute('src', image);
        document.getElementById("recipe-container").appendChild(imageEl);
    }

    //  ****** Display ingredients ******
    if (ingredients) {        
        var ingredientsHeadEl = document.createElement("h4");
        ingredientsHeadEl.id = "ingredient-head";
        ingredientsHeadEl.innerHTML = "Ingredients: ";
        document.getElementById("recipe-container").appendChild(ingredientsHeadEl);        

        // loop for ingredient list
        var ingredientArr = ingredients[i];
        for (i = 0; i < ingredients.length; i++) {
             var ingredientUl = document.createElement("ul");
	     ingredientUl.id = "ingredient-container";
             document.getElementById("recipe-container").appendChild(ingredientUl);

             var ingredientLi = document.createElement("li");
             ingredientLi.id = "ingredient-item";
             document.getElementById("ingredient-container").appendChild(ingredientLi);

             var ingredientEl = 
        }       

	
 //       titleEl.id = "recipe-title";
 //       titleEl.innerHTML = title;
 //       document.getElementById("recipe-container").appendChild(titleEl);
    }


}
