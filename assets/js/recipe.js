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
    // event.preventDefault();


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

var containerCount = function() {
    var Rcontainer = document.getElementsByClassName("column is-3 box").length;
    for (j = 0; j < Rcontainer; j++) {
        document.getElementsByClassName("column is-3 box")[j].id = "Rcontainer" + j;
        };
}



// *** display recipe cards ***
var displayRecipe = function(recipeData) {           

                                                                    // ****** Recipe #1 ******

       //  ****** Display Title ******   
    var title0 = recipeData.hits[0].recipe.label;   
    document.getElementById("title-0").innerHTML = title0; 

    //  ****** Display image ******                             
    var parent0 = document.getElementById("container-0");
    var image0 = recipeData.hits[0].recipe.image;
    var imageEl0 = document.getElementById("image-0");
    var imageURL0 = document.createElement("a");
    imageURL0.setAttribute('href', recipeData.hits[0].recipe.url);
    imageURL0.appendChild(imageEl0);
    imageEl0.setAttribute('src', image0);
    parent0.appendChild(imageURL0);

    // ****** Display Nutrition Informarion ******
    var serve0 = recipeData.hits[0].recipe.yield;
    document.getElementById("serve-0").innerHTML = serve0;


    var calorie0 = recipeData.hits[0].recipe.calories;
    document.getElementById("calorie-0").innerHTML = Math.round(calorie0 / serve0);

    var totalFat0 = recipeData.hits[0].recipe.totalNutrients.FAT.quantity;
    var totalFatUnit0 = recipeData.hits[0].recipe.totalNutrients.FAT.unit;
    document.getElementById("fat-0").innerHTML = Math.round(totalFat0 / serve0) + totalFatUnit0;

    var satFat0 = recipeData.hits[0].recipe.totalNutrients.FASAT.quantity;
    var satFatUnit0 = recipeData.hits[0].recipe.totalNutrients.FASAT.unit;
    document.getElementById("sat-0").innerHTML = Math.round(satFat0 / serve0) + satFatUnit0;

    var transFat0 = recipeData.hits[0].recipe.totalNutrients.FATRN.quantity;
    var transFatUnit0 = recipeData.hits[0].recipe.totalNutrients.FATRN.unit;
    document.getElementById("trans-0").innerHTML = Math.round(transFat0 / serve0) + transFatUnit0;

    var monoFat0 = recipeData.hits[0].recipe.totalNutrients.FAMS.quantity;
    var monoFatUnit0 = recipeData.hits[0].recipe.totalNutrients.FAMS.unit;
    document.getElementById("mono-0").innerHTML = Math.round(monoFat0 / serve0) + monoFatUnit0;

    var polyFat0 = recipeData.hits[0].recipe.totalNutrients.FAPU.quantity;
    var polyFatUnit0 = recipeData.hits[0].recipe.totalNutrients.FAPU.unit;
    document.getElementById("poly-0").innerHTML = Math.round(polyFat0 / serve0) + polyFatUnit0;

    var chole0 = recipeData.hits[0].recipe.totalNutrients.CHOLE.quantity;
    var choleUnit0 = recipeData.hits[0].recipe.totalNutrients.CHOLE.unit;
    document.getElementById("cholesterol-0").innerHTML = Math.round(chole0 / serve0) + choleUnit0;
            
    var sodium0 = recipeData.hits[0].recipe.totalNutrients.NA.quantity;
    var sodiumUnit0 = recipeData.hits[0].recipe.totalNutrients.NA.unit;
    document.getElementById("sodium-0").innerHTML = Math.round(sodium0 / serve0) + sodiumUnit0;

    var carb0 = recipeData.hits[0].recipe.totalNutrients.CHOCDF.quantity;
    var carbUnit0 = recipeData.hits[0].recipe.totalNutrients.CHOCDF.unit;
    document.getElementById("carb-0").innerHTML = Math.round(carb0 / serve0) + carbUnit0;

    var fiber0 = recipeData.hits[0].recipe.totalNutrients.FIBTG.quantity;
    var fiberUnit0 = recipeData.hits[0].recipe.totalNutrients.FIBTG.unit;
    document.getElementById("fiber-0").innerHTML = Math.round(fiber0 / serve0) + fiberUnit0;

    var sugar0 = recipeData.hits[0].recipe.totalNutrients.SUGAR.quantity;
    var sugarUnit0 = recipeData.hits[0].recipe.totalNutrients.SUGAR.unit;
    document.getElementById("sugar-0").innerHTML = Math.round(sugar0 / serve0) + sugarUnit0;

    var protein0 = recipeData.hits[0].recipe.totalNutrients.PROCNT.quantity;
    var proteinUnit0 = recipeData.hits[0].recipe.totalNutrients.PROCNT.unit;
    document.getElementById("protien-0").innerHTML = Math.round(protein0 / serve0) + proteinUnit0;
            

                                                                // ****** Recipe #2 ******

       //  ****** Display Title ******   
    var title1 = recipeData.hits[1].recipe.label;   
    document.getElementById("title-1").innerHTML = title1; 

    //  ****** Display image ******                             
    var parent1 = document.getElementById("container-1");
    var image1 = recipeData.hits[1].recipe.image;
    var imageEl1 = document.getElementById("image-1");
    var imageURL1 = document.createElement("a");
    imageURL1.setAttribute('href', recipeData.hits[1].recipe.url);
    imageURL1.appendChild(imageEl1);
    imageEl1.setAttribute('src', image1);
    parent1.appendChild(imageURL1);

    // ****** Display Nutrition Informarion ******
    var serve1 = recipeData.hits[1].recipe.yield;
    document.getElementById("serve-1").innerHTML = serve1;


    var calorie1 = recipeData.hits[1].recipe.calories;
    document.getElementById("calorie-1").innerHTML = Math.round(calorie1 / serve1);

    var totalFat1 = recipeData.hits[1].recipe.totalNutrients.FAT.quantity;
    var totalFatUnit1 = recipeData.hits[1].recipe.totalNutrients.FAT.unit;
    document.getElementById("fat-1").innerHTML = Math.round(totalFat1 / serve1) + totalFatUnit1;

    var satFat1 = recipeData.hits[1].recipe.totalNutrients.FASAT.quantity;
    var satFatUnit1 = recipeData.hits[1].recipe.totalNutrients.FASAT.unit;
    document.getElementById("sat-1").innerHTML = Math.round(satFat1 / serve1) + satFatUnit1;

    var transFat1 = recipeData.hits[1].recipe.totalNutrients.FATRN.quantity;
    var transFatUnit1 = recipeData.hits[1].recipe.totalNutrients.FATRN.unit;
    document.getElementById("trans-1").innerHTML = Math.round(transFat1 / serve1) + transFatUnit1;

    var monoFat1 = recipeData.hits[1].recipe.totalNutrients.FAMS.quantity;
    var monoFatUnit1 = recipeData.hits[1].recipe.totalNutrients.FAMS.unit;
    document.getElementById("mono-1").innerHTML = Math.round(monoFat1 / serve1) + monoFatUnit1;

    var polyFat1 = recipeData.hits[1].recipe.totalNutrients.FAPU.quantity;
    var polyFatUnit1 = recipeData.hits[1].recipe.totalNutrients.FAPU.unit;
    document.getElementById("poly-1").innerHTML = Math.round(polyFat1 / serve1) + polyFatUnit1;

    var chole1 = recipeData.hits[1].recipe.totalNutrients.CHOLE.quantity;
    var choleUnit1 = recipeData.hits[1].recipe.totalNutrients.CHOLE.unit;
    document.getElementById("cholesterol-1").innerHTML = Math.round(chole1 / serve1) + choleUnit1;
            
    var sodium1 = recipeData.hits[1].recipe.totalNutrients.NA.quantity;
    var sodiumUnit1 = recipeData.hits[1].recipe.totalNutrients.NA.unit;
    document.getElementById("sodium-1").innerHTML = Math.round(sodium1 / serve1) + sodiumUnit1;

    var carb1 = recipeData.hits[1].recipe.totalNutrients.CHOCDF.quantity;
    var carbUnit1 = recipeData.hits[1].recipe.totalNutrients.CHOCDF.unit;
    document.getElementById("carb-1").innerHTML = Math.round(carb1 / serve1) + carbUnit1;

    var fiber1 = recipeData.hits[1].recipe.totalNutrients.FIBTG.quantity;
    var fiberUnit1 = recipeData.hits[1].recipe.totalNutrients.FIBTG.unit;
    document.getElementById("fiber-1").innerHTML = Math.round(fiber1 / serve1) + fiberUnit1;

    var sugar1 = recipeData.hits[1].recipe.totalNutrients.SUGAR.quantity;
    var sugarUnit1 = recipeData.hits[1].recipe.totalNutrients.SUGAR.unit;
    document.getElementById("sugar-1").innerHTML = Math.round(sugar1 / serve1) + sugarUnit1;

    var protein1 = recipeData.hits[1].recipe.totalNutrients.PROCNT.quantity;
    var proteinUnit1 = recipeData.hits[1].recipe.totalNutrients.PROCNT.unit;
    document.getElementById("protien-1").innerHTML = Math.round(protein1 / serve1) + proteinUnit1;
    

    
                                                                // ****** Recipe #3 ******

       //  ****** Display Title ******   
       var title2 = recipeData.hits[2].recipe.label;   
       document.getElementById("title-2").innerHTML = title2; 
   
       //  ****** Display image ******                             
       var parent2 = document.getElementById("container-2");
       var image2 = recipeData.hits[2].recipe.image;
       var imageEl2 = document.getElementById("image-2");
       var imageURL2 = document.createElement("a");
       imageURL2.setAttribute('href', recipeData.hits[2].recipe.url);
       imageURL2.appendChild(imageEl2);
       imageEl2.setAttribute('src', image2);
       parent2.appendChild(imageURL2);
   
       // ****** Display Nutrition Informarion ******
       var serve2 = recipeData.hits[2].recipe.yield;
       document.getElementById("serve-2").innerHTML = serve2;
   
   
       var calorie2 = recipeData.hits[2].recipe.calories;
       document.getElementById("calorie-2").innerHTML = Math.round(calorie2 / serve2);
   
       var totalFat2 = recipeData.hits[2].recipe.totalNutrients.FAT.quantity;
       var totalFatUnit2 = recipeData.hits[2].recipe.totalNutrients.FAT.unit;
       document.getElementById("fat-2").innerHTML = Math.round(totalFat2 / serve2) + totalFatUnit2;
   
       var satFat2 = recipeData.hits[2].recipe.totalNutrients.FASAT.quantity;
       var satFatUnit2 = recipeData.hits[2].recipe.totalNutrients.FASAT.unit;
       document.getElementById("sat-2").innerHTML = Math.round(satFat2 / serve2) + satFatUnit2;
   
       var transFat2 = recipeData.hits[2].recipe.totalNutrients.FATRN.quantity;
       var transFatUnit2 = recipeData.hits[2].recipe.totalNutrients.FATRN.unit;
       document.getElementById("trans-2").innerHTML = Math.round(transFat2 / serve2) + transFatUnit2;
   
       var monoFat2 = recipeData.hits[2].recipe.totalNutrients.FAMS.quantity;
       var monoFatUnit2 = recipeData.hits[2].recipe.totalNutrients.FAMS.unit;
       document.getElementById("mono-2").innerHTML = Math.round(monoFat2 / serve2) + monoFatUnit2;
   
       var polyFat2 = recipeData.hits[2].recipe.totalNutrients.FAPU.quantity;
       var polyFatUnit2 = recipeData.hits[2].recipe.totalNutrients.FAPU.unit;
       document.getElementById("poly-2").innerHTML = Math.round(polyFat2 / serve2) + polyFatUnit2;
   
       var chole2 = recipeData.hits[2].recipe.totalNutrients.CHOLE.quantity;
       var choleUnit2 = recipeData.hits[2].recipe.totalNutrients.CHOLE.unit;
       document.getElementById("cholesterol-2").innerHTML = Math.round(chole2 / serve2) + choleUnit2;
               
       var sodium2 = recipeData.hits[2].recipe.totalNutrients.NA.quantity;
       var sodiumUnit2 = recipeData.hits[2].recipe.totalNutrients.NA.unit;
       document.getElementById("sodium-2").innerHTML = Math.round(sodium2 / serve2) + sodiumUnit2;
   
       var carb2 = recipeData.hits[2].recipe.totalNutrients.CHOCDF.quantity;
       var carbUnit2 = recipeData.hits[2].recipe.totalNutrients.CHOCDF.unit;
       document.getElementById("carb-2").innerHTML = Math.round(carb2 / serve2) + carbUnit2;
   
       var fiber2 = recipeData.hits[2].recipe.totalNutrients.FIBTG.quantity;
       var fiberUnit2 = recipeData.hits[2].recipe.totalNutrients.FIBTG.unit;
       document.getElementById("fiber-2").innerHTML = Math.round(fiber2 / serve2) + fiberUnit2;
   
       var sugar2 = recipeData.hits[2].recipe.totalNutrients.SUGAR.quantity;
       var sugarUnit2 = recipeData.hits[2].recipe.totalNutrients.SUGAR.unit;
       document.getElementById("sugar-2").innerHTML = Math.round(sugar2 / serve2) + sugarUnit2;
   
       var protein2 = recipeData.hits[2].recipe.totalNutrients.PROCNT.quantity;
       var proteinUnit2 = recipeData.hits[2].recipe.totalNutrients.PROCNT.unit;
       document.getElementById("protien-2").innerHTML = Math.round(protein2 / serve2) + proteinUnit2;
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
