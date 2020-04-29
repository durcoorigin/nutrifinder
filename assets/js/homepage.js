var getRecipe = function() {
    var apiUrl= 'https://api.edamam.com/search?q=beef&app_id=42dd91c3&app_key=caa35ee6d60671cba69188f9d36208c3&from=0&to=3&calories=591-722&health=alcohol-free';
    
	fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
	
            console.log(data);
        });
    });    
}

getRecipe();