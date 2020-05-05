// selects recipe title
var recipeTitleEl = document.querySelector('#recipe-title');
// selects recipe container
var recipeContainer = document.querySelector('#recipe-container');
// selects the search bar input
var searchEl = document.querySelector("#search-bar");
// selects the search button
var searchButtonEl = document.querySelector("#search-button");

// *** search term handler ***
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

// *** Displays title ***
var getTitle = function(recipeData) {
    console.log(recipeData.q)
    recipeTitleEl.textContent = recipeData.q;
};

// *** fetches API info ***
var getRecipe = function(searchItem) {
    // **!NOTICE!**
    // The APP ID and APP KEY in the URL is Nick's (Changed from final)
    var apiUrl= 'https://api.edamam.com/search?q=' + searchItem + '&app_id=42dd91c3&app_key=caa35ee6d60671cba69188f9d36208c3&from=0&to=3&calories=591-722&health=alcohol-free';
	fetch(apiUrl).then(function(response) {
        response.json().then(function(recipeData) {
            console.log(recipeData)
            displayRecipe(recipeData)
            getTitle(recipeData)
        });
    });    
}

// *** display recipe cards ***
var displayRecipe = function(recipeData) {

    for (var i = 0; i < recipeData.hits.length; i++) {

            //  ****** Recipie Container ******
            var RContainer = document.createElement('div');
            RContainer.classList = "column is-3 box";
            RContainer.setAttribute('id', "container-one")
            recipeContainer.appendChild(RContainer);

            //  ****** Display Title ******   
            var title = recipeData.hits[i].recipe.label;   
            var titleEl = document.createElement("h2");
            titleEl.textContent = title;
            RContainer.appendChild(titleEl);
            titleEl.classList = "subtitle";

            //  ****** Display image ******
            var image = recipeData.hits[i].recipe.image;
            var imageEl = document.createElement("img");
            var imageURL = document.createElement("a")
            imageURL.setAttribute('href', recipeData.hits[i].recipe.url)
            imageEl.classList = "image";
            imageURL.appendChild(imageEl);
            imageEl.setAttribute('src', image);
            RContainer.appendChild(imageURL);

            // ****** Display Nutrition Informarion ******
            var nutritionEL = document.createElement("div");
            nutritionEL.id = "nutrition-container";
            RContainer.appendChild(nutritionEL);

            var serveLbl = "Number of Servings: ";
            var serve = recipeData.hits[0].recipe.yield;
            var serveEl = document.createElement("h3");
            serveEl.setAttribute('id', "recipe-title");
            serveEl.textContent = serveLbl + serve;
            nutritionEL.appendChild(serveEl);

            var amtPerServ = "Amount per serving:"
            var amtPerServEl = document.createElement("h3");
            amtPerServEl.textContent = amtPerServ;
            nutritionEL.appendChild(amtPerServEl);

            var calorieLbl = "Calories: ";
            var calorie = recipeData.hits[i].recipe.calories;
            var calorieEl = document.createElement("li");
            calorieEl.textContent = calorieLbl +  Math.round(calorie / serve);
            nutritionEL.appendChild(calorieEl);

            var totalFatLbl = "Total Fat: ";
            var totalFat = recipeData.hits[i].recipe.totalNutrients.FAT.quantity;
            var totalFatUnit = recipeData.hits[i].recipe.totalNutrients.FAT.unit;
            var totalFatEl = document.createElement("li");
            totalFatEl.textContent = totalFatLbl +  Math.round(totalFat / serve) + totalFatUnit;
            nutritionEL.appendChild(totalFatEl);

            var satFatLbl = "Saturated Fat: ";
            var satFat = recipeData.hits[i].recipe.totalNutrients.FASAT.quantity;
            var satFatUnit = recipeData.hits[i].recipe.totalNutrients.FASAT.unit;
            var satFatEl = document.createElement("li");
            satFatEl.textContent = satFatLbl +  Math.round(satFat / serve) + satFatUnit;
            nutritionEL.appendChild(satFatEl);

            var transFatLbl = "Trans Fat: ";
            var transFat = recipeData.hits[i].recipe.totalNutrients.FATRN.quantity;
            var transFatUnit = recipeData.hits[i].recipe.totalNutrients.FATRN.unit;
            var transFatEl = document.createElement("li");
            transFatEl.textContent = transFatLbl +  Math.round(transFat / serve) + transFatUnit;
            nutritionEL.appendChild(transFatEl);

            var monoFatLbl = "Monounsaturated Fat: ";
            var monoFat = recipeData.hits[i].recipe.totalNutrients.FAMS.quantity;
            var monoFatUnit = recipeData.hits[i].recipe.totalNutrients.FAMS.unit;
            var monoFatEl = document.createElement("li");
            monoFatEl.textContent = monoFatLbl +  Math.round(monoFat / serve) + monoFatUnit;
            nutritionEL.appendChild(monoFatEl);

            var polyFatLbl = "Polyunsaturated Fat: ";
            var polyFat = recipeData.hits[i].recipe.totalNutrients.FAPU.quantity;
            var polyFatUnit = recipeData.hits[i].recipe.totalNutrients.FAPU.unit;
            var polyFatEl = document.createElement("li");
            polyFatEl.textContent = polyFatLbl +  Math.round(polyFat / serve) + polyFatUnit;
            nutritionEL.appendChild(polyFatEl);

            var choleLbl = "Cholesterol: ";
            var chole = recipeData.hits[i].recipe.totalNutrients.CHOLE.quantity;
            var choleUnit = recipeData.hits[i].recipe.totalNutrients.CHOLE.unit;
            var choleEl = document.createElement("li");
            choleEl.textContent = choleLbl +  Math.round(chole / serve) + choleUnit;
            nutritionEL.appendChild(choleEl);
            
            var sodiumLbl = "Sodium: ";
            var sodium = recipeData.hits[i].recipe.totalNutrients.NA.quantity;
            var sodiumUnit = recipeData.hits[i].recipe.totalNutrients.NA.unit;
            var sodiumEl = document.createElement("li");
            sodiumEl.textContent = sodiumLbl +  Math.round(sodium / serve) + sodiumUnit;
            nutritionEL.appendChild(sodiumEl);

            var carbLbl = "Total Carbohydrate: ";
            var carb = recipeData.hits[i].recipe.totalNutrients.CHOCDF.quantity;
            var carbUnit = recipeData.hits[i].recipe.totalNutrients.CHOCDF.unit;
            var carbEl = document.createElement("li");
            carbEl.textContent = carbLbl +  Math.round(carb / serve) + carbUnit;
            nutritionEL.appendChild(carbEl);

            var fiberLbl = "Dietary Fiber: ";
            var fiber = recipeData.hits[i].recipe.totalNutrients.FIBTG.quantity;
            var fiberUnit = recipeData.hits[i].recipe.totalNutrients.FIBTG.unit;
            var fiberEl = document.createElement("li");
            fiberEl.textContent = fiberLbl +  Math.round(fiber / serve) + fiberUnit;
            nutritionEL.appendChild(fiberEl);

            var sugarLbl = "Sugars: ";
            var sugar = recipeData.hits[i].recipe.totalNutrients.SUGAR.quantity;
            var sugarUnit = recipeData.hits[i].recipe.totalNutrients.SUGAR.unit;
            var sugarEl = document.createElement("li");
            sugarEl.textContent = sugarLbl +  Math.round(sugar / serve) + sugarUnit;
            nutritionEL.appendChild(sugarEl);

            var proteinLbl = "Protein: ";
            var protein = recipeData.hits[i].recipe.totalNutrients.PROCNT.quantity;
            var proteinUnit = recipeData.hits[i].recipe.totalNutrients.PROCNT.unit;
            var proteinEl = document.createElement("li");
            proteinEl.textContent = proteinLbl +  Math.round(protein / serve) + proteinUnit;
            nutritionEL.appendChild(proteinEl);

        }
};

// ************** if you want the click to work on enter key ***************************************************
// *This is purely a feature, but I thought I'd leave it in here if you wanted to review how it works*         |
//-                                                                                                            |
// // Execute a function when the user releases a key on the keyboard                                          |
// searchButtonEl.addEventListener("keyup", function(event) {                                                  |
//     // Number 13 is the "Enter" key on the keyboard                                                         |
//     if (event.keyCode === 13) {                                                                             |
//       // Cancel the default action, if needed                                                               |
//       event.preventDefault();                                                                               |
//       // Trigger the button element with a click                                                            |
//       document.getElementById("search-button").click(searchHandler);                                        |
//     }                                                                                                       |
//   });                                                                                                       |
// *************************************************************************************************************

// when user clicks the search button it runs the search handler function
searchButtonEl.addEventListener('click', searchHandler);
