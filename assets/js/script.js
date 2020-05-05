
// selects the search bar input
var searchEl = document.querySelector("#search-bar");
// selects the search button
var searchButtonEl = document.querySelector("#search-button");

// fetches API info
var getRecipe = function(searchItem) {
    var apiUrl= 'https://api.edamam.com/search?q=' + searchItem + '&app_id=42dd91c3&app_key=caa35ee6d60671cba69188f9d36208c3&from=0&to=3&calories=591-722&health=alcohol-free';
    localStorage.setItem('apiUrl', apiUrl)
    window.location="recipe.html"
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
//searchButtonEl.addEventListener("click", searchHandler);

function foodDBCall(ingrData) {
    var cal, pro, fat, carbs, quantity, mlabel, flabel, brand, img;
  var errMsg 		= '';
  var result 		= '';

  var param = encodeURI(ingrData);
      param = param.replace("+", "%2B");

  $.ajax({
      url: 'https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id=07d50733&app_key=80fcb49b500737827a9a23f7049653b9',
      type: 'GET',
        data: param,
      //data: {ingr: ingrData},
      success: function(data) {
          console.log(data.parsed);
          if(data.hints == ""){
              result =	'<h4>Food Database</h4>'+
                          '<span class="addition-e">Ooops, nothing in our database matches what you are searching for. Please try again</span>';
              $(".foodresult").append(result);
          } else if(data.hints != "") {
              result =	'<h4>Food Database</h4>'+
                          '<table class="table-res-recipe">'+
                          '  <thead>'+
                          '    <tr>'+
                          '      <th>Image</th>'+
                          '      <th>Qty</th>'+
                          '      <th>Unit</th>'+
                          '      <th class="col-6">Food</th>'+
                          '      <th>Energy</th>'+
                          '      <th class="col-2">Nutrients</th>'+
                          '    </tr>'+
                          '  </thead>'+
                          '  <tbody>';
                      
                  $.each(data.hints, function(i) {
                      if (i > 9) {return false};
                      if (typeof(data.hints[i].food.nutrients.ENERC_KCAL) != "undefined") {
                          cal = '<b>'+Math.floor(data.hints[i].food.nutrients.ENERC_KCAL)+' kcal</b>';
                      } else {cal = ''}
                      if (typeof(data.hints[i].food.nutrients.PROCNT) != "undefined") {
                          pro = 'Protein: <b class="mes">'+Math.floor(data.hints[i].food.nutrients.PROCNT)+' g</b></br>';
                      } else {pro = ''}
                      if (typeof(data.hints[i].food.nutrients.FAT) != "undefined") {
                          fat = 'Fat: <b class="mes">'+Math.floor(data.hints[i].food.nutrients.FAT)+' g</b></br>';
                      } else {fat = ''}
                      if (typeof(data.hints[i].food.nutrients.CHOCDF) != "undefined") {
                          carbs = 'Carbs: <b class="mes">'+Math.floor(data.hints[i].food.nutrients.CHOCDF)+' g</b></br>';
                      } else {carbs = ''}

                      if (typeof(data.hints[i].food.brand) != "undefined") {
                          brand = data.hints[i].food.brand+' - ';
                      } else {brand = ''}
                      if (typeof(data.hints[i].food.label) != "undefined") {
                          flabel = data.hints[i].food.label;
                      } else {flabel = ''}   
                      if (typeof(data.hints[i].food.image) != "undefined") {
                          img = data.hints[i].food.image;
                      } else {img = 'https://developer.edamam.com/images/food.png'} 							

                      result += 	'<tr>'+
                                  '	<th><img src="'+img+'"></th>'+
                                  '	<th>100</th>'+
                                  '   <th>g</th>'+
                                  '   <th>'+brand+flabel+'</th>'+
                                  '   <th>'+cal+'</th>'+
                                  '   <th class="last">'+pro+fat+carbs+'</th>'+           
                                  '</tr>';                        

                  });
              
                  result +=	'	</tbody>'+
                              '</table>';
                  $(".foodresult").append(result);
                  
          }
          $('.loading-area').css('display', 'none');
          $('.result-area').css('display', 'block');
      }
  });	
}  

function runAnalyzer(){
    //console.log("We have a running function!");
    //Taking the textArea, and breaking into an arry based on commas,
    var ingredients = $("#ingredientList").val().split(",")//.trim();
    for(let i=0; i<ingredients.length;i++){
        ingredients[i]=encodeURI(ingredients[i].trim());
    }
    console.log(ingredients);

    var data = {
        dietLabels:[], //lowfat???lead with label //dietLabels
        kCalories: 0, //in kCal //ENERC_KCAL
        protein: 0, //in grams //PROCNT
        totalFat: 0, //in grams //FAT
        saturatedFat: 0, //in grams //FASAT
        transFat: 0, //in g //FAMS, FAPU
        cholesterol: 0, //in milligrams //CHOLE
        sodium: 0, //in mg //NA
        totalCarb: 0, //in g //CHOCDF
        dietaryFiber: 0, //in g //FIBTG
        totalSugars: 0, //in g //SUGAR
        vitaminD: 0, //in micrograms //VITD
        calcium: 0, //in mg //CA
        iron: 0, //in mg //FE
        potassium: 0, //in mg //K
        zinc:0, //in mg //ZN
        weight: 0, //grams-seperate box w qty,unit,food,cal //totalWeight
    }

    //Construct a loop to run through the array, and call the Ajax
    for(let i=0;i<ingredients.length;i++){
        $.ajax({
            url: "https://api.edamam.com/api/nutrition-data?"
                +"app_id=07c1dcfb&app_key=652ba58dda5f85c77b798069d6366055&ingr="
                +ingredients[i],
            type: "GET"
        })
        //We take the AJAX response and we store it to set of vars
        .then(function(nutrionData){
            console.log(nutrionData);

            if(nutrionData.totalNutrients.ENERC_KCAL.quantity){data.kCalories += nutrionData.totalNutrients.ENERC_KCAL.quantity;}
            data.protein += nutrionData.totalNutrients.PROCNT.quantity;
            data.totalFat += nutrionData.totalNutrients.FAT.quantity;
            data.saturatedFat+=nutrionData.totalNutrients.FASAT.quantity;
            data.transFat+=nutrionData.totalNutrients.FAMS.quantity+nutrionData.totalNutrients.FAPU.quantity;
            data.cholesterol+=nutrionData.totalNutrients.CHOLE.quantity;
            data.sodium+=nutrionData.totalNutrients.NA.quantity;
            data.totalCarb+=nutrionData.totalNutrients.CHOCDF.quantity;
            data.dietaryFiber+=nutrionData.totalNutrients.FIBTG.quantity;
            data.totalSugars+=nutrionData.totalNutrients.SUGAR.quantity;
            data.vitaminD+=nutrionData.totalNutrients.VITD.quantity;
            data.calcium+=nutrionData.totalNutrients.CA.quantity;
            data.iron+=nutrionData.totalNutrients.FE.quantity;
            data.potassium+=nutrionData.totalNutrients.K.quantity;
            data.zinc+= nutrionData.totalNutrients.ZN.quantity;
            data.weight += nutrionData.totalWeight;

            if(i==0){
                data.dietLabels=nutrionData.dietLabels;
            } else if(data.dietLabels.length>0) {
                let newDietLabels=[];
                for(let j=0; j<data.dietLabels.length;i++){
                    if(nutrionData.dietLabels.contains(data.dataLabels[j])){
                        newDietLabels.push(data.dataLabels[i]);
                    }
                }
                data.dietLabels=newDietLabels;
            }

            //If this is the final run of the loop
            if(i+1==ingredients.length){
                createLabel(data); //call createLabel function
            }
        }).catch(function(err){
            console.log(err);
        })
        //Issues:
        //we have a limited number of these requests we can make
        //Each ingredient is one request
    }
    //console.log("The for loop has ended");
}

function createLabel(nutritionData){
    //We take those variables, and create food label.
    //console.log("Create Label has started");
    const labelData = Object.entries(nutritionData);
    //console.log(labelData);
    var nutritionLabel = document.createElement("div"); //$("<div>")
    nutritionLabel.classList.add("label");
    
    if(labelData[0][1]){
        let dietaryLabel = document.createElement("div"); //$("<div>")
        dietaryLabel.textContent=labelData[0][1]; //.text(labelData[0][1])
        nutritionLabel.append(dietaryLabel);
    }
    
    for(let i=1; i<labelData.length; i++){
        let row = document.createElement("div");
        row.textContent=labelData[i][0]+": "+parseFloat(labelData[i][1]).toFixed(2)+getAmountName(i);
        //row.textContent+=getAmountName(i);
        if(i%2==0){
            row.style="background-color: gray";
        } else {
            row.style="background-color: white";
        }
        nutritionLabel.append(row);
    }
    document.getElementById("analysisResult").append(nutritionLabel);
}

function getAmountName(index){
    switch(index){
        case 1:
            return "kCal";
        case 2: case 3: case 4: case 5: case 8: case 9: case 10:
            return "g";
        case 6: case 7: case 12: case 13: case 14: case 15:
            return "mg";
        case 11:
            return "ug";
        default:
            return "";
    }
}

function resetPage() {
  location.reload();
};