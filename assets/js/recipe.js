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
    console.log(searchItem);
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
            console.log(recipeData)
            displayRecipe(recipeData)
        });
    });    
}

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
    
    //     //  ****** Recipe 2 ******
    //     if (allRecipies[1]) {

    //         //  ****** Recipe Container ******
    //         var RContainer = document.createElement('div');
    //         RContainer.classList = "column is-3 box";
    //         RContainer.setAttribute('id', "container-two")
    //         recipeContainer.appendChild(RContainer);

    //         //  ****** Display Title ******   
    //         var title = recipeData.hits[1].recipe.label;   
    //         var titleEl = document.createElement("h2");
    //         titleEl.classList = "subtitle";
    //         titleEl.textContent = title;
    //         RContainer.appendChild(titleEl);

    //         //  ****** Display image ******
    //         var image = recipeData.hits[1].recipe.image;
    //         var imageEl = document.createElement("img");
    //         var imageURL = document.createElement("a")
    //         imageURL.setAttribute('href', recipeData.hits[1].recipe.url)
    //         imageEl.classList = "image";
    //         imageURL.appendChild(imageEl);
    //         imageEl.setAttribute('src', image);
    //         RContainer.appendChild(imageURL);

    //         // ****** Display Nutrition Informarion ******
    //         var nutritionEL = document.createElement("div");
    //         nutritionEL.id = "nutrition-container";
    //         RContainer.appendChild(nutritionEL);

    //         var serveLbl = "Number of Servings: ";
    //         var serve = recipeData.hits[1].recipe.yield;
    //         var serveEl = document.createElement("h4");
    //         serveEl.textContent = serveLbl + serve;
    //         nutritionEL.appendChild(serveEl);

    //         var amtPerServ = "Amount per serving:"
    //         var amtPerServEl = document.createElement("h4");
    //         amtPerServEl.textContent = amtPerServ;
    //         nutritionEL.appendChild(amtPerServEl);

    //         var calorieLbl = "Calories: ";
    //         var calorie = recipeData.hits[1].recipe.calories;
    //         var calorieEl = document.createElement("li");
    //         calorieEl.textContent = calorieLbl +  Math.round(calorie / serve);
    //         nutritionEL.appendChild(calorieEl);

    //         var totalFatLbl = "Total Fat: ";
    //         var totalFat = recipeData.hits[1].recipe.totalNutrients.FAT.quantity;
    //         var totalFatUnit = recipeData.hits[1].recipe.totalNutrients.FAT.unit;
    //         var totalFatEl = document.createElement("li");
    //         totalFatEl.textContent = totalFatLbl +  Math.round(totalFat / serve) + totalFatUnit;
    //         nutritionEL.appendChild(totalFatEl);

    //         var satFatLbl = "Saturated Fat: ";
    //         var satFat = recipeData.hits[1].recipe.totalNutrients.FASAT.quantity;
    //         var satFatUnit = recipeData.hits[1].recipe.totalNutrients.FASAT.unit;
    //         var satFatEl = document.createElement("li");
    //         satFatEl.textContent = satFatLbl +  Math.round(satFat / serve) + satFatUnit;
    //         nutritionEL.appendChild(satFatEl);

    //         var transFatLbl = "Trans Fat: ";
    //         var transFat = recipeData.hits[1].recipe.totalNutrients.FATRN.quantity;
    //         var transFatUnit = recipeData.hits[1].recipe.totalNutrients.FATRN.unit;
    //         var transFatEl = document.createElement("li");
    //         transFatEl.textContent = transFatLbl +  Math.round(transFat / serve) + transFatUnit;
    //         nutritionEL.appendChild(transFatEl);

    //         var monoFatLbl = "Monounsaturated Fat: ";
    //         var monoFat = recipeData.hits[1].recipe.totalNutrients.FAMS.quantity;
    //         var monoFatUnit = recipeData.hits[1].recipe.totalNutrients.FAMS.unit;
    //         var monoFatEl = document.createElement("li");
    //         monoFatEl.textContent = monoFatLbl +  Math.round(monoFat / serve) + monoFatUnit;
    //         nutritionEL.appendChild(monoFatEl);

    //         var polyFatLbl = "Polyunsaturated Fat: ";
    //         var polyFat = recipeData.hits[1].recipe.totalNutrients.FAPU.quantity;
    //         var polyFatUnit = recipeData.hits[1].recipe.totalNutrients.FAPU.unit;
    //         var polyFatEl = document.createElement("li");
    //         polyFatEl.textContent = polyFatLbl +  Math.round(polyFat / serve) + polyFatUnit;
    //         nutritionEL.appendChild(polyFatEl);

    //         var choleLbl = "Cholesterol: ";
    //         var chole = recipeData.hits[1].recipe.totalNutrients.CHOLE.quantity;
    //         var choleUnit = recipeData.hits[1].recipe.totalNutrients.CHOLE.unit;
    //         var choleEl = document.createElement("li");
    //         choleEl.textContent = choleLbl +  Math.round(chole / serve) + choleUnit;
    //         nutritionEL.appendChild(choleEl);
            
    //         var sodiumLbl = "Sodium: ";
    //         var sodium = recipeData.hits[1].recipe.totalNutrients.NA.quantity;
    //         var sodiumUnit = recipeData.hits[1].recipe.totalNutrients.NA.unit;
    //         var sodiumEl = document.createElement("li");
    //         sodiumEl.textContent = sodiumLbl +  Math.round(sodium / serve) + sodiumUnit;
    //         nutritionEL.appendChild(sodiumEl);

    //         var carbLbl = "Total Carbohydrate: ";
    //         var carb = recipeData.hits[1].recipe.totalNutrients.CHOCDF.quantity;
    //         var carbUnit = recipeData.hits[1].recipe.totalNutrients.CHOCDF.unit;
    //         var carbEl = document.createElement("li");
    //         carbEl.textContent = carbLbl +  Math.round(carb / serve) + carbUnit;
    //         nutritionEL.appendChild(carbEl);

    //         var fiberLbl = "Dietary Fiber: ";
    //         var fiber = recipeData.hits[1].recipe.totalNutrients.FIBTG.quantity;
    //         var fiberUnit = recipeData.hits[1].recipe.totalNutrients.FIBTG.unit;
    //         var fiberEl = document.createElement("li");
    //         fiberEl.textContent = fiberLbl +  Math.round(fiber / serve) + fiberUnit;
    //         nutritionEL.appendChild(fiberEl);

    //         var sugarLbl = "Sugars: ";
    //         var sugar = recipeData.hits[1].recipe.totalNutrients.SUGAR.quantity;
    //         var sugarUnit = recipeData.hits[1].recipe.totalNutrients.SUGAR.unit;
    //         var sugarEl = document.createElement("li");
    //         sugarEl.textContent = sugarLbl +  Math.round(sugar / serve) + sugarUnit;
    //         nutritionEL.appendChild(sugarEl);

    //         var proteinLbl = "Protein: ";
    //         var protein = recipeData.hits[1].recipe.totalNutrients.PROCNT.quantity;
    //         var proteinUnit = recipeData.hits[1].recipe.totalNutrients.PROCNT.unit;
    //         var proteinEl = document.createElement("li");
    //         proteinEl.textContent = proteinLbl +  Math.round(protein / serve) + proteinUnit;
    //         nutritionEL.appendChild(proteinEl);
    //     };

    //     //  ****** Recipe 2 ******
    //     if (allRecipies[2]) {

    //         //  ****** Recipe Container ******
    //         var RContainer = document.createElement('div');
    //         RContainer.classList = "column is-3 box";
    //         RContainer.setAttribute('id', "container-two")
    //         recipeContainer.appendChild(RContainer);

    //         //  ****** Display Title ******   
    //         var title = recipeData.hits[2].recipe.label;   
    //         var titleEl = document.createElement("h2");
    //         titleEl.classList = "subtitle";
    //         titleEl.textContent = title;
    //         RContainer.appendChild(titleEl);

    //         //  ****** Display image ******
    //         var image = recipeData.hits[2].recipe.image;
    //         var imageEl = document.createElement("img");
    //         var imageURL = document.createElement("a")
    //         imageURL.setAttribute('href', recipeData.hits[1].recipe.url)
    //         imageEl.classList = "image";
    //         imageURL.appendChild(imageEl);
    //         imageEl.setAttribute('src', image);
    //         RContainer.appendChild(imageURL);

    //         // ****** Display Nutrition Informarion ******
    //         var nutritionEL = document.createElement("div");
    //         nutritionEL.id = "nutrition-container";
    //         RContainer.appendChild(nutritionEL);

    //         var serveLbl = "Number of Servings: ";
    //         var serve = recipeData.hits[2].recipe.yield;
    //         var serveEl = document.createElement("h4");
    //         serveEl.textContent = serveLbl + serve;
    //         nutritionEL.appendChild(serveEl);

    //         var amtPerServ = "Amount per serving:"
    //         var amtPerServEl = document.createElement("h4");
    //         amtPerServEl.textContent = amtPerServ;
    //         nutritionEL.appendChild(amtPerServEl);

    //         var calorieLbl = "Calories: ";
    //         var calorie = recipeData.hits[2].recipe.calories;
    //         var calorieEl = document.createElement("li");
    //         calorieEl.textContent = calorieLbl +  Math.round(calorie / serve);
    //         nutritionEL.appendChild(calorieEl);

    //         var totalFatLbl = "Total Fat: ";
    //         var totalFat = recipeData.hits[2].recipe.totalNutrients.FAT.quantity;
    //         var totalFatUnit = recipeData.hits[2].recipe.totalNutrients.FAT.unit;
    //         var totalFatEl = document.createElement("li");
    //         totalFatEl.textContent = totalFatLbl +  Math.round(totalFat / serve) + totalFatUnit;
    //         nutritionEL.appendChild(totalFatEl);

    //         var satFatLbl = "Saturated Fat: ";
    //         var satFat = recipeData.hits[2].recipe.totalNutrients.FASAT.quantity;
    //         var satFatUnit = recipeData.hits[2].recipe.totalNutrients.FASAT.unit;
    //         var satFatEl = document.createElement("li");
    //         satFatEl.textContent = satFatLbl +  Math.round(satFat / serve) + satFatUnit;
    //         nutritionEL.appendChild(satFatEl);

    //         var transFatLbl = "Trans Fat: ";
    //         var transFat = recipeData.hits[2].recipe.totalNutrients.FATRN.quantity;
    //         var transFatUnit = recipeData.hits[2].recipe.totalNutrients.FATRN.unit;
    //         var transFatEl = document.createElement("li");
    //         transFatEl.textContent = transFatLbl +  Math.round(transFat / serve) + transFatUnit;
    //         nutritionEL.appendChild(transFatEl);

    //         var monoFatLbl = "Monounsaturated Fat: ";
    //         var monoFat = recipeData.hits[2].recipe.totalNutrients.FAMS.quantity;
    //         var monoFatUnit = recipeData.hits[2].recipe.totalNutrients.FAMS.unit;
    //         var monoFatEl = document.createElement("li");
    //         monoFatEl.textContent = monoFatLbl +  Math.round(monoFat / serve) + monoFatUnit;
    //         nutritionEL.appendChild(monoFatEl);

    //         var polyFatLbl = "Polyunsaturated Fat: ";
    //         var polyFat = recipeData.hits[2].recipe.totalNutrients.FAPU.quantity;
    //         var polyFatUnit = recipeData.hits[2].recipe.totalNutrients.FAPU.unit;
    //         var polyFatEl = document.createElement("li");
    //         polyFatEl.textContent = polyFatLbl +  Math.round(polyFat / serve) + polyFatUnit;
    //         nutritionEL.appendChild(polyFatEl);

    //         var choleLbl = "Cholesterol: ";
    //         var chole = recipeData.hits[2].recipe.totalNutrients.CHOLE.quantity;
    //         var choleUnit = recipeData.hits[2].recipe.totalNutrients.CHOLE.unit;
    //         var choleEl = document.createElement("li");
    //         choleEl.textContent = choleLbl +  Math.round(chole / serve) + choleUnit;
    //         nutritionEL.appendChild(choleEl);
            
    //         var sodiumLbl = "Sodium: ";
    //         var sodium = recipeData.hits[2].recipe.totalNutrients.NA.quantity;
    //         var sodiumUnit = recipeData.hits[2].recipe.totalNutrients.NA.unit;
    //         var sodiumEl = document.createElement("li");
    //         sodiumEl.textContent = sodiumLbl +  Math.round(sodium / serve) + sodiumUnit;
    //         nutritionEL.appendChild(sodiumEl);

    //         var carbLbl = "Total Carbohydrate: ";
    //         var carb = recipeData.hits[2].recipe.totalNutrients.CHOCDF.quantity;
    //         var carbUnit = recipeData.hits[2].recipe.totalNutrients.CHOCDF.unit;
    //         var carbEl = document.createElement("li");
    //         carbEl.textContent = carbLbl +  Math.round(carb / serve) + carbUnit;
    //         nutritionEL.appendChild(carbEl);

    //         var fiberLbl = "Dietary Fiber: ";
    //         var fiber = recipeData.hits[2].recipe.totalNutrients.FIBTG.quantity;
    //         var fiberUnit = recipeData.hits[2].recipe.totalNutrients.FIBTG.unit;
    //         var fiberEl = document.createElement("li");
    //         fiberEl.textContent = fiberLbl +  Math.round(fiber / serve) + fiberUnit;
    //         nutritionEL.appendChild(fiberEl);

    //         var sugarLbl = "Sugars: ";
    //         var sugar = recipeData.hits[2].recipe.totalNutrients.SUGAR.quantity;
    //         var sugarUnit = recipeData.hits[2].recipe.totalNutrients.SUGAR.unit;
    //         var sugarEl = document.createElement("li");
    //         sugarEl.textContent = sugarLbl +  Math.round(sugar / serve) + sugarUnit;
    //         nutritionEL.appendChild(sugarEl);

    //         var proteinLbl = "Protein: ";
    //         var protein = recipeData.hits[2].recipe.totalNutrients.PROCNT.quantity;
    //         var proteinUnit = recipeData.hits[2].recipe.totalNutrients.PROCNT.unit;
    //         var proteinEl = document.createElement("li");
    //         proteinEl.textContent = proteinLbl +  Math.round(protein / serve) + proteinUnit;
    //         nutritionEL.appendChild(proteinEl);
    //     };
    // }
};